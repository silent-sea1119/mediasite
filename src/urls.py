""" URLs for the app """
from webapp2 import Route


ROUTES = [
    Route('/api/v1/songs/get/', handler='app.views.api.v1.songs.SongsApiHandler'),
    Route('/api/v1/song/get/<song_id:\d+>', handler='app.views.api.v1.songs.SongApiHandler'),
    Route('/api/v1/user/login/', handler='app.views.api.v1.user.LoginHandler'),
    Route('/<:.*>', handler='app.views.main.MainView'),
]
