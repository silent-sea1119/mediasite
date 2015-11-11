"""
Oauth APIs
"""
import logging
import urllib

import webapp2
from app.models.user import User

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

        if code:
            user_info = TheCitySDK.post_for_user_token(code)
            sdk = TheCitySDK(user_info['access_token'])
            user_permissions = sdk.get_user_permissions()
            if 'error_code' not in user_permissions:
                if sdk.user_is_in_worship_arts(user_permissions):
                    # Put model by user_info dict?
                    logging.info('This user can join our site')
                    user_info_dict = sdk.get_basic_user_info()
                    User.put_from_city_dict(user_info_dict)
                    self.redirect('/login?success=true&userId={}'.format(user_info_dict['id']))
                else:
                    logging.info('This user needs to be added to a Worship Arts group on The City')
                    # TODO: Redirect to a different landing page explaining the purpose of this site and who to contact.
                    self.redirect('/')
            else:
                self.redirect('/login')
