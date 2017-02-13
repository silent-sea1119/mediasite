""" SongSheetGeneration """
from google.appengine.ext import ndb


class SongSheetGeneration(ndb.Model):
    """
    Track a song sheet being generated. When and which song.
    """
    song_id = ndb.StringProperty(required=True)
    generation_date = ndb.DateProperty(auto_now_add=True)
    