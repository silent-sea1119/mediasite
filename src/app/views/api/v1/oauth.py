"""
Oauth APIs
"""
import webapp2
import urllib

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
            user_info = TheCitySDK.post_for_user_token(code)
        else:
            pass
