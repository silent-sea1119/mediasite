"This class manages a table of unique ids."

import re
import random
import logging
import string
from google.appengine.ext import ndb

VALID_NAMESPACE_REGEX = re.compile(r"^[a-zA-Z][\w]*$")

class TinyIDGenerator(object):
    """Generates a short unique id.

    It is likely not efficient to draw references to this table. Instead simply use the string
    returned by generate_tinyid() as a unique string in whatever other entity you wish and set 
    an index over it (presuming you want to look up by the tinyid).
    
    Note: tinyid always uses the default (datastore) namespace ''.
    """

    def __init__(self, namespace='', tinyid_len=8, max_trials=100, chars='BCDFGHJKLMNPQRSTVWXZ23456789'):
        """Constructs a tinyid generator
        
        namespace the namespace for the tinyid, e.g., different namespaces may yield an identical tinyid
        tinytinyid_len
        """

        self.namespace = ''
        if namespace:
            if not VALID_NAMESPACE_REGEX.match(namespace):
                raise Exception('namespace must start with a character and consist of letters, numbers, and underscore only.')
            self.namespace = namespace + '_'
            
        self.tinyid_len = tinyid_len
        self.max_trials = max_trials
        self.chars = "".join([i for i in chars if i in string.letters])
        self.ints = "".join([i for i in chars if i in string.digits])
        self.both = self.chars + self.ints

        # set up default dependencies
        self.random = random
    
    def inject_random(self, random):
        "Injects an alternate random implementation."
        self.random = random

    def get_tinyid_regex_string(self):
        "Returns a string that can be used to match a generated tinyid."
        return "[%(chars)s][%(chars)s%(ints)s]*" % {"chars": self.chars, "ints": self.ints}

    def generate_tinyid(self, run_in_transaction=True):
        "Generates a unique tinyid, returning the actual tinyid string."
        
        def __get_or_insert(trial_id):
            key = ndb.Key(TinyID, trial_id, namespace='')
            existing_tinyid = key.get()
            if existing_tinyid:
                raise Exception()
            newtinyid = TinyID(key=key)
            newtinyid.put()
            return trial_id

        i = 0
        while i < self.max_trials:
            i = i + 1
            trial_id = self.namespace \
                       + self.random.choice(self.chars) \
                       + ''.join([self.random.choice(self.both) for r in range(self.tinyid_len-1)])
            # try to insert this new one
            try:
                if run_in_transaction:
                    insert_result = ndb.transaction(lambda: __get_or_insert(trial_id))
                else:
                    __get_or_insert(trial_id)
                break
            except Exception as e:
                # something failed, loop and try again
                logging.debug("Something happened, likely a collision (key: '%s'). Retrying." % trial_id, exc_info=True)
                continue

        if i >= self.max_trials:
            message = "Tried over %s times to create a tinyid. Increase tinyid.ID_LEN." % self.max_trials
            logging.critical(message)
            raise Exception(message)

        return trial_id[len(self.namespace):]


class TinyID(ndb.Model):
    "This actually stores the used tinyid's in datastore."
    pass
