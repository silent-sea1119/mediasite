"""
song models
"""
from tinyid import TinyIDGenerator

from google.appengine.ext import ndb


class Song(ndb.Model):
    """ Songs """
    song_id = ndb.StringProperty(required=True)
    title = ndb.StringProperty(required=True)
    lower_title = ndb.ComputedProperty(lambda song: song.title.lower())
    author1 = ndb.StringProperty(required=True)
    author2 = ndb.StringProperty()
    song_key = ndb.StringProperty(required=True)
    ccli = ndb.StringProperty()
    style = ndb.StringProperty()
    use1 = ndb.StringProperty()
    use2 = ndb.StringProperty()
    copy_date = ndb.StringProperty()
    bible_reference = ndb.StringProperty()
    youtube_link = ndb.StringProperty()
    publisher = ndb.StringProperty()
    notes = ndb.StringProperty()
    song_order = ndb.StringProperty()  # Arrangement for the song
    external_url = ndb.StringProperty()
    font_size = ndb.StringProperty()
    song_data = ndb.JsonProperty()

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
            "title": self.title,
            "author1": self.author1,
            "author2": self.author2,
            "songId": self.song_id,
            "songKey": self.song_key,
            "ccli": self.ccli,
            "style": self.style,
            "use1": self.use1,
            "use2": self.use2,
            "copyDate": self.copy_date,
            "bibleReference": self.bible_reference,
            "youtubeLink": self.youtube_link,
            "publisher": self.publisher,
            "notes": self.notes,
            "songOrder": self.song_order,
            "externalUrl": self.external_url,
            "fontSize": self.font_size,
            "songData": self.song_data if with_song_data and self.song_data else {}
        }
