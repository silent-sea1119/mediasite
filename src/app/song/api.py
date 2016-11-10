""" API for dealing with songs """
from .model import Song


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
                author2=None, ccli=None, style=None, use1=None, use2=None, copy_date=None, bible_reference=None,
                youtube_link=None, publisher=None, notes=None, song_order=None, external_url=None, font_size=None,
                song_data=None):
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
        bible_reference=bible_reference,
        youtube_link=youtube_link,
        publisher=publisher,
        notes=notes,
        song_order=song_order,
        external_url=external_url,
        font_size=font_size,
        song_data=song_data
    )
    song.put()

    return song_id


def search_songs_by_title(search_text):
    """ Search songs by search_text, which searches the titles only """
    song_query = Song.query()
    if search_text:
        lower_search = search_text.lower()
        song_query.filter(Song.lower_title >= lower_search).filter(Song.lower_title < lower_search + u'\ufffd')
    return [song.to_api_dict() for song in song_query.fetch()]
