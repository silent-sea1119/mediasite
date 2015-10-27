"""
SDK for the City API
"""
import logging
import json
import urllib
import urllib2

from settings import THE_CITY_APP_ID, THE_CITY_SECRET, THE_CITY_OAUTH_CALLBACK_URI, THE_CITY_OAUTH_TOKEN_GET_URI


class TheCitySDK(object):

    @staticmethod
    def _get(url, **kwargs):
        formatted_url = url + '?AuthToken={}'.format()
        formatted_url = formatted_url + '&' + urllib.urlencode(kwargs)
        logging.info(formatted_url)
        return urllib2.urlopen(formatted_url).read()

    @staticmethod
    def _post(url, **kwargs):
        logging.info(url)
        return urllib2.urlopen(url, kwargs).read()

    @staticmethod
    def post_for_user_token(code):
        post_data = {
            'grant_type': 'authorization_code',
            'code': code,
            'client_id': THE_CITY_APP_ID,
            'client_secret': THE_CITY_SECRET,
            'redirect_uri': THE_CITY_OAUTH_CALLBACK_URI
        }

        user_info = TheCitySDK._post(THE_CITY_OAUTH_TOKEN_GET_URI, **post_data)



class TheCitySDKException(Exception):
    """
    Raised for mediasite api issues
    """
