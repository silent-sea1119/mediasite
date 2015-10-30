"""
SDK for the City API
"""
import logging

import urllib
import requests

from settings import THE_CITY_APP_ID, THE_CITY_APP_SECRET, THE_CITY_OAUTH_CALLBACK_URI, THE_CITY_OAUTH_TOKEN_GET_URI, \
    THE_CITY_ME_PERMISSIONS_URI, THE_CITY_ME_URI


class TheCitySDK(object):

    def __init__(self, access_token):
        self.access_token = access_token

    @staticmethod
    def _get(url, url_params=None):
        logging.info(url)
        logging.info(url_params)
        return requests.get(url, params=url_params)

    @staticmethod
    def _post(url, data):
        logging.info(url)
        try:
            response = requests.post(url, data=data)

            logging.info(response)

            return response.json()
        except Exception as e:
            pass

    @staticmethod
    def post_for_user_token(code):
        post_data = {
            'grant_type': 'authorization_code',
            'code': code,
            'client_id': THE_CITY_APP_ID,
            'client_secret': THE_CITY_APP_SECRET,
            'redirect_uri': THE_CITY_OAUTH_CALLBACK_URI
        }

        user_info = TheCitySDK._post(THE_CITY_OAUTH_TOKEN_GET_URI, post_data)

        if user_info and user_info.get('access_token'):
            return user_info['access_token']

    def authed_get(self, url):
        return requests.get(url, headers={
            'accept': 'application/vnd.thecity.v1+json',
            'X-THECITY-ACCESS-TOKEN': self.access_token,
            'X-THECITY-SUBDOMAIN': 'cdac',
            # 'Authorization': 'Bearer {}'.format(self.access_token)
        })

    def get_user_info(self):
        user_json = self.authed_get(THE_CITY_ME_URI).json()
        logging.info(user_json)
        return user_json

    def get_user_permissions(self):
        perms_json = self.authed_get(THE_CITY_ME_PERMISSIONS_URI).json()
        logging.info(perms_json)
        return perms_json

    @staticmethod
    def user_is_in_worship_arts(user_info):
        return len([post_type for post_type, groups in user_info['can_create_in_group_ids'].iteritems()
                    if 104999 in groups]) > 0


class TheCitySDKException(Exception):
    """
    Raised for The City api issues
    """
