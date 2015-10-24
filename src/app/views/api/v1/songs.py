"""
API endpoints related to songs
"""
import logging
import json
import urllib2

from settings import MEDIASITE_SEARCH_SONGS_URL, MEDIASITE_API_KEY
from app.views.api import JsonApiHandler


class SongsApiHandler(JsonApiHandler):
    """
    Api for getting multiple songs at once.
    """
    def get(self):
        logging.info(self.request.GET)
        filter_text = self.request.GET.get('filterText', '')
        try:
            formatted_url = MEDIASITE_SEARCH_SONGS_URL + '?AuthToken={}&searchText={}'.format(MEDIASITE_API_KEY, filter_text)
            logging.info(formatted_url)
            result = urllib2.urlopen(formatted_url).read()
            loaded_result = json.loads(result)
            logging.info(loaded_result)
            return self.render_response({
                'totalSongs': loaded_result['records'],
                'rows': loaded_result['rows']
            })
        except urllib2.URLError as ue:
            logging.error(ue)
        # return self.render_response({'filterText': filter_text})
