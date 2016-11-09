"""
SDK for the Mediasite API
"""
import logging
import json
import urllib
import urllib2

from settings import MEDIASITE_SEARCH_SONGS_URL, MEDIASITE_GET_SONG_URL, MEDIASITE_API_KEY


class MediasiteSDK(object):

    @staticmethod
    def get(url, **kwargs):
        formatted_url = url + '?AuthToken={}'.format(MEDIASITE_API_KEY)
        formatted_url = formatted_url + '&' + urllib.urlencode(kwargs)
        logging.info(formatted_url)
        return urllib2.urlopen(formatted_url).read()

    @staticmethod
    def get_songs(search_text='', search_field='Title', search_filter=0, rows=25, page=1, sort_order='desc'):
        """
        Gets songs from the Mediasite API.
        https://docs.google.com/document/d/1AGdhzhhsx0aW9lhnhK5J7uRDnT2LvYaGQnkZ4u8RJMc/edit#

        :param search_text: The text to search on
        :param search_field: Name of the field to search for
        :param search_filter: Constrains search to a certain song group
        :param rows: # of rows per page
        :param page: Page number to return
        :param sort_order: Return results in desc(ending) or asc(ending) order.
        :return: json.loads'd result from the API
        """
        try:
            result = MediasiteSDK.get(MEDIASITE_SEARCH_SONGS_URL, **{
                'searchText': search_text,
                'searchField': search_field,
                'rows': rows,
                'page': page,
                'sort_order': sort_order
            })
            loaded_result = json.loads(result)
            # logging.info(loaded_result)
            return loaded_result
        except urllib2.URLError as ue:
            raise MediasiteSDKException(ue.message)

    @staticmethod
    def get_song(song_id):
        """
        Get a song from the Mediasite API.
        https://docs.google.com/document/d/1AGdhzhhsx0aW9lhnhK5J7uRDnT2LvYaGQnkZ4u8RJMc/edit#
        :param song_id: Id of the song to retrieve.
        :return: json.loads'd result from the API
        """
        try:
            result = MediasiteSDK.get(MEDIASITE_GET_SONG_URL, **{
                'id': song_id
            })
            loaded_result = json.loads(result)
            logging.info(loaded_result)
            return loaded_result
        except urllib2.URLError as ue:
            raise MediasiteSDKException(ue.message)


class MediasiteSDKException(Exception):
    """
    Raised for mediasite api issues
    """
