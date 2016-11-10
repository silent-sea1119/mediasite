"""
API endpoints related to songs
"""
from app.song import search_songs_by_title, get_song_api_dict_by_id
from app.views.api import JsonApiHandler


class SongApiHandler(JsonApiHandler):
    """
    Api for getting single songs by id
    """
    def get(self, song_id):
        song = get_song_api_dict_by_id(song_id, with_song_data=True)
        if not song:
            return self.abort(404)
        return self.render_response(song)


class SongsApiHandler(JsonApiHandler):
    """
    Api for getting multiple songs at once.
    """
    def get(self):
        search_text = self.request.GET.get('searchText', '')
        result = search_songs_by_title(search_text)
        return self.render_response(result)
