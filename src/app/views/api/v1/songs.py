"""
API endpoints related to songs
"""
from app.views.api import JsonApiHandler
from mediasitesdk import MediasiteSDK


class SongApiHandler(JsonApiHandler):
    """
    Api for getting single songs by id
    """
    def get(self, song_id):
        if not song_id:
            return
        result = MediasiteSDK.get_song(song_id)
        return self.render_response(result)


class SongsApiHandler(JsonApiHandler):
    """
    Api for getting multiple songs at once.
    """
    def get(self):
        search_text = self.request.GET.get('searchText', '')
        result = MediasiteSDK.get_songs(search_text=search_text, rows=50)
        return self.render_response(result['rows'], {
            'totalSongs': result['records']
        })
