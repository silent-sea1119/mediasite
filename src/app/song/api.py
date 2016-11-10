""" API for dealing with songs """
from .model import Song


def get_song_by_id(song_id):
    """ Get a song by its id """
    song = Song.build_key(song_id)
    if song:
        return song.get()


def create_song(title, author1, song_key,
                author2=None, ccli=None, style=None, use1=None, use2=None, copy_date=None, bible_reference=None,
                youtube_link=None, publisher=None, notes=None, song_order=None, external_url=None, font_size=None,
                song_data=None):
    """ Create a song and return its id """
    song_id = Song.generate_song_id()
    song = Song(
        key=Song.build_key(song_id),
        song_id=song_id,
        Title=title,
        Author1=author1,
        Author2=author2,
        SongKey=song_key,
        CCLI=ccli,
        Style=style,
        Use1=use1,
        Use2=use2,
        CopyDate=copy_date,
        BibleReference=bible_reference,
        YouTubeLink=youtube_link,
        Publisher=publisher,
        Notes=notes,
        SongOrder=song_order,
        ExternalUrl=external_url,
        FontSize=font_size,
        SongData=song_data
    )
    song.put()

    return song_id


def search_songs_by_title(search_text):
    """ Search songs by search_text, which searches the titles only """
    return Song.query(Song.Title >= search_text).filter(Song.Title < search_text + u'\ufffd').fetch()
