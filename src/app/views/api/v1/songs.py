"""
API endpoints related to songs
"""
import json

from app.song import create_song
from app.song import get_song_by_id
from app.song import search_songs_by_title, get_song_api_dict_by_id
from app.song import update_song_by_id
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

    def post(self, song_id):
        song = get_song_by_id(song_id)
        if not song:
            return self.abort(404)
        song_body = json.loads(self.request.body)
        update_song_by_id(song_id, **self._convert_camel_to_snake(song_body))
        return self.render_response({'songId': song.song_id})

    @staticmethod
    def _convert_camel_to_snake(song_body):
        converts = {
            u'copy_date': song_body.get('copyDate', u''),
            u'bible_reference': song_body.get('bibleReference', u''),
            u'youtube_link': song_body.get('youtubeLink', u''),
            u'song_order': song_body.get('songOrder', u''),
            u'external_url': song_body.get('externalUrl', u''),
            u'font_size': song_body.get('fontSize', u''),
            u'song_data': song_body.get('songData', u''),
            u'song_key': song_body.get('songKey', u'')
        }
        song_body.update(converts)
        return song_body

    def put(self):
        new_song_body = json.loads(self.request.body)
        new_song_id = create_song(new_song_body['title'], new_song_body['author1'], new_song_body['songKey'])
        return self.render_response({'songId': new_song_id})


class SongsApiHandler(JsonApiHandler):
    """
    Api for getting multiple songs at once.
    """
    def get(self):
        search_text = self.request.GET.get('searchText', '')
        result = search_songs_by_title(search_text)
        return self.render_response(result)
