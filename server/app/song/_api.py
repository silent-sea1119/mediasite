""" API for dealing with songs """
from google.appengine.ext import ndb

from ._model import Song, EditHistoryItem

from settings import UNDEFINED


def get_song_by_id(song_id):
    """ Get a song by its id """
    song_key = Song.build_key(song_id)
    return song_key.get()


def get_song_api_dict_by_id(song_id, with_song_data=False):
    """ Get a song's api dict by its id """
    song = get_song_by_id(song_id)
    if song:
        return song.to_api_dict(with_song_data=with_song_data)


def create_song(title, author1, song_key,
                author2=None, ccli=None, style=None, use1=None, use2=None, copy_date=None, bible_references=None,
                youtube_link=None, publisher=None, notes=None, song_order=None, external_url=None, font_size=None,
                song_data=None, user_id=None, tempo=None, beats_per_minute=None, in_rotation=None, category=None):
    """ Create a song and return its id """
    song_id = Song.generate_song_id()
    song = Song(
        key=Song.build_key(song_id),
        song_id=song_id,
        title=title,
        author1=author1,
        author2=author2,
        song_key=song_key,
        ccli=ccli,
        style=style,
        use1=use1,
        use2=use2,
        copy_date=copy_date,
        bible_references=bible_references,
        youtube_link=youtube_link,
        publisher=publisher,
        notes=notes,
        song_order=song_order,
        external_url=external_url,
        font_size=font_size,
        song_data=song_data,
        created_by_user_id=user_id,
        tempo=tempo,
        beats_per_minute=beats_per_minute,
        in_rotation=in_rotation,
        category=category,
    )
    song.put()

    return song_id


@ndb.transactional()
def update_song_by_id(song_id, **kwargs):
    """ Update a song by its id, passing in kwargs to do so """
    song = get_song_by_id(song_id)
    if kwargs.has_key('user_id'):
        kwargs['last_edited_by_user_id'] = kwargs.pop('user_id')
    song.apply_changes(**kwargs)


def track_song_edit(user_id, song_id):
    """ Mark that a song has been edited by a user """
    return EditHistoryItem.create(user_id, song_id)


def search_songs_by_title(search_text, in_rotation_only=True, descending_name_order=False):
    """ Search songs by search_text, which searches the titles only """
    song_query = Song.query()
    if search_text:
        lower_search = search_text.lower()
        song_query = song_query.filter(Song.lower_title >= lower_search).filter(Song.lower_title < lower_search + u'\ufffd')
    if in_rotation_only:
        song_query = song_query.filter(Song.in_rotation == True)
    if descending_name_order:
        song_query = song_query.order(Song.lower_title)
    return [song.to_api_dict() for song in song_query.fetch()]


def get_count_of_songs():
    """ Returns the number of song entities """
    return Song.query().count()
