"""
Oauth APIs
"""
import logging
import urllib

import webapp2

from thecitysdk import TheCitySDK
from settings import THE_CITY_LOGIN_REDIRECT_URI, THE_CITY_APP_ID, THE_CITY_OAUTH_CALLBACK_URI


class OauthLoginHandler(webapp2.RequestHandler):
    def get(self):
        self.redirect(THE_CITY_LOGIN_REDIRECT_URI.format(THE_CITY_APP_ID,
                                                         urllib.quote(THE_CITY_OAUTH_CALLBACK_URI, safe=''),
                                                         'somestatefulthing'))


class OauthRedirectCallbackHandler(webapp2.RequestHandler):
    def get(self):
        code = self.request.GET.get('code')
        state = self.request.GET.get('state')

        if code:
            sdk = TheCitySDK(TheCitySDK.post_for_user_token(code))
            user_info = sdk.get_user_permissions()
            if sdk.user_is_in_worship_arts(user_info):
                logging.info('This user can join our site')
                self.response.out.write('They are good to go')
            else:
                logging.info('This user needs to be added to a Worship Arts group on The City')
                self.response.out.write('Not sufficient privileges!')
