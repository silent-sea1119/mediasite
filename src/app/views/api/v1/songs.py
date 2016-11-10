"""
API endpoints related to songs
"""
from app.song import get_song_by_id
from app.views.api import JsonApiHandler
from mediasitesdk import MediasiteSDK


class SongApiHandler(JsonApiHandler):
    """
    Api for getting single songs by id
    """
    def get(self, song_id):
        song = get_song_by_id(song_id)
        if not song:
            return self.abort(404)
        return self.render_response(song.to_api_dict(with_song_data=True))


class SongsApiHandler(JsonApiHandler):
    """
    Api for getting multiple songs at once.
    """
    def get(self):
        search_text = self.request.GET.get('searchText', '')
        result = MediasiteSDK.get_songs(search_text=search_text, rows=50)
        return self.render_response(result)
