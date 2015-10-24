""" URLs for the app """
from webapp2 import Route, SimpleRoute


ROUTES = [
    Route('/api/v1/songs/get/', handler='app.views.api.v1.songs.SongsApiHandler'),
    SimpleRoute('/*', handler='app.views.main.MainView'),
]
