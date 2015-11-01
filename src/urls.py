""" URLs for the app """
from webapp2 import Route


ROUTES = [
    Route('/api/v1/songs/get/', handler='app.views.api.v1.songs.SongsApiHandler'),
    Route('/api/v1/song/get/<song_id:\d+>', handler='app.views.api.v1.songs.SongApiHandler'),
    Route('/api/v1/user/login/', handler='app.views.api.v1.user.LoginHandler'),
    Route('/api/v1/user/get/<user_id:\d+>', handler='app.views.api.v1.user.GetUserInfoHandler'),
    Route('/api/v1/cityoauth/callback/', handler='app.views.api.v1.oauth.OauthRedirectCallbackHandler'),
    Route('/api/v1/cityoauth/login/', handler='app.views.api.v1.oauth.OauthLoginHandler'),
    Route('/<:.*>', handler='app.views.main.MainView'),  # Enables React Router to do it's thing with urls.
]
