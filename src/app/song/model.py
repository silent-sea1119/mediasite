"""
song models
"""
import json

from tinyid import TinyIDGenerator

from google.appengine.ext import ndb


class Song(ndb.Model):
    """
    Songs
    """
    song_id = ndb.StringProperty(required=True)
    Title = ndb.StringProperty(required=True)
    Author1 = ndb.StringProperty(required=True)
    Author2 = ndb.StringProperty()
    SongKey = ndb.StringProperty(required=True)
    CCLI = ndb.StringProperty()
    Style = ndb.StringProperty()
    Use1 = ndb.StringProperty()
    Use2 = ndb.StringProperty()
    CopyDate = ndb.StringProperty()
    BibleReference = ndb.StringProperty()
    YouTubeLink = ndb.StringProperty()
    Publisher = ndb.StringProperty()
    Notes = ndb.StringProperty()
    SongOrder = ndb.StringProperty()  # Arrangement for the song
    ExternalUrl = ndb.StringProperty()
    FontSize = ndb.StringProperty()
    SongData = ndb.JsonProperty()

    @classmethod
    def build_key(cls, song_id):
        """ Build a song key """
        return ndb.Key(cls, song_id)

    @staticmethod
    def generate_song_id():
        """ Generate a song id """
        return TinyIDGenerator(namespace="SGID").generate_tinyid(run_in_transaction=ndb.in_transaction())

    def to_api_dict(self, with_song_data=False):
        """ Return a dict representation of a model """
        return {
            "title": self.Title,
            "author1": self.Author1,
            "author2": self.Author2,
            "songId": self.song_id,
            "songKey": self.SongKey,
            "ccli": self.CCLI,
            "style": self.Style,
            "use1": self.Use1,
            "use2": self.Use2,
            "copyDate": self.CopyDate,
            "bibleReference": self.BibleReference,
            "youtubeLink": self.YouTubeLink,
            "publisher": self.Publisher,
            "notes": self.Notes,
            "songOrder": self.SongOrder,
            "externalUrl": self.ExternalUrl,
            "fontSize": self.FontSize,
            "songData": json.loads(self.SongData) if with_song_data and self.SongData else ""
        }
