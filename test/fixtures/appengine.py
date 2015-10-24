"""
Test Fixtures for Google AppEngine dependencies
"""
import os

from google.appengine.datastore.datastore_stub_util import TimeBasedHRConsistencyPolicy, PseudoRandomHRConsistencyPolicy
from google.appengine.ext import testbed

from .base_test_case import TestCase


__all__ = ['GaeTestCase']


# Don't require standard naming conventions
# pylint: disable=C0103
class GaeTestCase(TestCase):
    """
    Base test case class for GAE tests
    """

    # Datastore configuration - may be overridden by child tests
    # Assumes file structure with XX/test/lib/vtest/appengine_helper.py, XX/src:
    APP_ROOT_PATH = os.path.join(os.path.dirname(__file__), '../../src')
    REQUIRE_DATASTORE_INDEXES = True

    # GaeTestCase.setUp: Arguments number differs from overridden method
    # pylint: disable=W0221
    def setUp(self, consistent=True, urlfetch=False):
        """
        Set up the GAE test environment
        """
        super(GaeTestCase, self).setUp()

        # Create and activate testbed
        self.testbed = testbed.Testbed()
        self.testbed.activate()

        # Declare which service stubs to use - these stubs provide test functionality that does not require ues of
        # the real GAE services under test.  E.g., using the datastore stub will test against an in-memory datastore.
        # See https://developers.google.com/appengine/docs/python/tools/localunittesting
        self.testbed.init_taskqueue_stub(_all_queues_valid=True, root_path=self.APP_ROOT_PATH)
        self.testbed.init_app_identity_stub()
        self.testbed.init_memcache_stub()
        self.testbed.init_capability_stub()
        self.testbed.init_files_stub()
        self.testbed.init_blobstore_stub()
        self.testbed.init_search_stub()

        # Urlfetch stub
        # =============
        if urlfetch:
            self.testbed.init_urlfetch_stub()  # SM: enable=False
        else:
            self.mock_function_in_setup('urllib2.urlopen',
                                 side_effect=ValueError('urllib2 urlopen is not allowed in unit tests'))
            self.mock_function_in_setup('httplib.HTTPConnection.request',
                                 side_effect=ValueError('HTTPConnection request is not allowed in unit tests'))

        # Datastore stub
        # ==============
        if consistent:
            policy = PseudoRandomHRConsistencyPolicy(probability=1)  # always used for SR
        else:
            policy = TimeBasedHRConsistencyPolicy()
        self.testbed.init_datastore_v3_stub(consistency_policy=policy,
                                            require_indexes=self.REQUIRE_DATASTORE_INDEXES,
                                            root_path=self.APP_ROOT_PATH)

    def tearDown(self):
        """
        Tear down the GAE test environment
        """
        self.testbed.deactivate()
        super(GaeTestCase, self).tearDown()

    # Stub getters
    # ============

    def get_taskqueue_stub(self):
        """ Get the taskqueue stub """
        taskqueue_stub = self.testbed.get_stub('taskqueue')
        if taskqueue_stub:
            return taskqueue_stub
        else:
            raise ValueError('Taskqueue stub not initialized.')

    def get_app_identity_stub(self):
        """ Get the app identity stub """
        app_identity_stub = self.testbed.get_stub('app_identity_service')
        if app_identity_stub:
            return app_identity_stub
        else:
            raise ValueError('App identity stub not initialized.')

    def get_memcache_stub(self):
        """ Get the memcache stub """
        memcache_stub = self.testbed.get_stub('memcache')
        if memcache_stub:
            return memcache_stub
        else:
            raise ValueError('Memcache stub not initialized.')

    def get_capability_stub(self):
        """ Get the capablity stub """
        capability_stub = self.testbed.get_stub('capability_service')
        if capability_stub:
            return capability_stub
        else:
            return ValueError('Capability stub not initialized.')

    def get_files_stub(self):
        """ Get the files stub """
        files_stub = self.testbed.get_stub('file')
        if files_stub:
            return files_stub
        else:
            raise ValueError('Files stub not initialized.')

    def get_blobstore_stub(self):
        """ Get the blobstore stub """
        blobstore_stub = self.testbed.get_stub('blobstore')
        if blobstore_stub:
            return blobstore_stub
        else:
            raise ValueError('Blobstore stub not initialized.')

    def get_search_stub(self):
        """ Get the search stub """
        search_stub = self.testbed.get_stub('search')
        if search_stub:
            return search_stub
        else:
            raise ValueError('Search stub not initialized.')

    def get_urlfetch_stub(self):
        """ Get the urlfetch stub """
        urlfetch_stub = self.testbed.get_stub('urlfetch')
        if urlfetch_stub:
            return urlfetch_stub
        else:
            raise ValueError('Urlfetch stub not initialized.')

    def get_datastore_stub(self):
        """ Get the datastore stub """
        datastore_stub = self.testbed.get_stub('datastore_v3')
        if datastore_stub:
            return datastore_stub
        else:
            raise ValueError('Datastore stub not initialized.')


class GaeTestCaseEventualConsistency(GaeTestCase):
    """
    Use this test case when you want to simulate high-replication datastore eventual consistency randomness.
    """
    # Arguments number differs from overridden method
    # pylint:disable=W0221
    def setUp(self):
        super(GaeTestCaseEventualConsistency, self).setUp(consistent=False)


class OtwGaeTestCase(GaeTestCase):
    """
    Use this test case when you want to enable the urlfetch stub in order to perform over-the-wire testing.
    """
    # Arguments number differs from overridden method
    # pylint:disable=W0221
    def setUp(self):
        super(OtwGaeTestCase, self).setUp(urlfetch=True)
