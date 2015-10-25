""" URLs for the app """
from webapp2 import Route, SimpleRoute


ROUTES = [
    Route('/api/v1/songs/get/', handler='app.views.api.v1.songs.SongsApiHandler'),
    Route('/api/v1/song/get/<song_id:\d+>', handler='app.views.api.v1.songs.SongApiHandler'),
    SimpleRoute('/*', handler='app.views.main.MainView'),
]
