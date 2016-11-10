"""
song models
"""
from google.appengine.ext import ndb


class Song(ndb.Model):
    """
    Songs
    """
    song_id = ndb.StringProperty(required=True)
    Title = ndb.StringProperty(required=True)
    Author1 = ndb.StringProperty(required=True)
    Author2 = ndb.StringProperty()
    SongKey = ndb.StringProperty()
    CCLI = ndb.StringProperty()
    Style = ndb.StringProperty()
    Use1 = ndb.StringProperty()
    Use2 = ndb.StringProperty()
    CopyDate = ndb.StringProperty()
    BibleReference = ndb.StringProperty()
    YouTubeLink = ndb.StringProperty()
    Publisher = ndb.StringProperty()
    Notes = ndb.StringProperty()
    SongOrder = ndb.StringProperty(description="Arrangement for the song")
    ExternalUrl = ndb.StringProperty()
    FontSize = ndb.StringProperty()
    SongData = ndb.JsonProperty()

    @classmethod
    def build_key(cls, song_id):
        """ Build a song key """
        return ndb.Key(cls, song_id)

