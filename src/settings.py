"""
settings
"""

MEDIASITE_API_KEY = 'FDEOJERG4523DFOIP'
MEDIASITE_BASE_URL = 'http://api.media2.cdac.ca/'
MEDIASITE_SONGS_URL = MEDIASITE_BASE_URL + 'Songs/'
MEDIASITE_GET_SONG_URL = MEDIASITE_SONGS_URL + 'GetSong/'
MEDIASITE_SEARCH_SONGS_URL = MEDIASITE_SONGS_URL + 'Search/'

THE_CITY_APP_ID = '6212dc830a5933fa4db00b57cc16f5b6933c094c47b5d0eddb8bc05d13a94c9e'
THE_CITY_OAUTH_CALLBACK_URI = 'http://localhost:8080/api/v1/cityoauth/callback/'
THE_CITY_LOGIN_REDIRECT_URI = 'https://authentication.onthecity.org/oauth/authorize?response_type=code' \
                              '&client_id={}&redirect_uri={}&state={}&scope=user_basic+user_extended'
THE_CITY_OAUTH_TOKEN_GET_URI = 'https://authentication.onthecity.org/oauth/token'
THE_CITY_GET_TOKEN_URI = 'https://authentication.onthecity.org/oauth/token'
THE_CITY_AUTHORIZATION_URI = 'https://authentication.onthecity.org/authorization?access_token={}'

from settings_secret import THE_CITY_SECRET
