"""
settings
"""
import os


MEDIASITE_API_KEY = 'FDEOJERG4523DFOIP'
MEDIASITE_BASE_URL = 'http://api.media2.cdac.ca/'
MEDIASITE_SONGS_URL = MEDIASITE_BASE_URL + 'Songs/'
MEDIASITE_GET_SONG_URL = MEDIASITE_SONGS_URL + 'GetSong/'
MEDIASITE_SEARCH_SONGS_URL = MEDIASITE_SONGS_URL + 'Search/'

# Production Plugin App Id
THE_CITY_APP_ID = '6212dc830a5933fa4db00b57cc16f5b6933c094c47b5d0eddb8bc05d13a94c9e'
OAUTH_CALLBACK_BASE = 'http://cdac-mediasite.appspot.com'

# Localhost specific config
if 'SERVER_SOFTWARE' in os.environ and os.environ['SERVER_SOFTWARE'].startswith('Development'):
    THE_CITY_APP_ID = '61ec5a595872743a091b10ddb070a62785ef8bf038fdce9495fffe23fcde4380'
    OAUTH_CALLBACK_BASE = 'http://localhost:8080'

THE_CITY_OAUTH_CALLBACK_URI = OAUTH_CALLBACK_BASE + '/api/v1/cityoauth/callback/'
THE_CITY_LOGIN_REDIRECT_URI = 'https://authentication.onthecity.org/oauth/authorize?response_type=code' \
                              '&client_id={}&redirect_uri={}&state={}&scope=user_basic+user_extended+user_permissions'
THE_CITY_OAUTH_TOKEN_GET_URI = 'https://authentication.onthecity.org/oauth/token'
THE_CITY_GET_TOKEN_URI = 'https://authentication.onthecity.org/oauth/token'
THE_CITY_AUTHORIZATION_URI = 'https://authentication.onthecity.org/authorization'

THE_CITY_BASE_URI = 'http://api.onthecity.org'
THE_CITY_ME_URI = THE_CITY_BASE_URI + '/me'
THE_CITY_ME_PERMISSIONS_URI = THE_CITY_ME_URI + '/permissions'

from settings_secret import THE_CITY_APP_SECRET, MEDIASITE_JWT_SECRET
