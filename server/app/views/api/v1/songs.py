"""
API endpoints related to songs
"""
import json

from app.song import create_song
from app.song import get_song_by_id
from app.song import search_songs_by_title, get_song_api_dict_by_id
from app.song import update_song_by_id, track_song_edit
from app.sheet_generation import track_song_sheet_generation
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
        track_song_edit(song_body['user_id'], song_id)
        return self.render_response({'songId': song.song_id})

    @staticmethod
    def _convert_camel_to_snake(song_body):
        converts = {
            u'copy_date': song_body.pop('copyDate', u''),
            u'youtube_link': song_body.pop('youtubeLink', u''),
            u'song_order': song_body.pop('songOrder', u''),
            u'external_url': song_body.pop('externalUrl', u''),
            u'font_size': song_body.pop('fontSize', u''),
            u'song_data': song_body.pop('songData', u''),
            u'song_key': song_body.pop('songKey', u''),
            u'user_id': song_body.pop('userId', u''),
            u'in_rotation': song_body.pop('inRotation', False),
            u'beats_per_minute': song_body.pop('bpm', u''),
            u'tempo': song_body.pop('tempo', u''),
            u'bible_references': song_body.pop('bibleReferences', u''),
        }
        song_body.update(converts)
        return song_body

    def put(self):
        new_song_body = json.loads(self.request.body)
        new_song_id = create_song(**self._convert_camel_to_snake(new_song_body))
        return self.render_response({'songId': new_song_id})


class SongsApiHandler(JsonApiHandler):
    """
    Api for getting multiple songs at once.
    """
    def get(self):
        search_text = self.request.GET.get('searchText', '')
        in_rotation_only = self.request.GET.get('inRotationOnly', '') == 'true'
        descending_name_order = self.request.GET.get('descendingName', '') == 'true'
        result = search_songs_by_title(
            search_text,
            in_rotation_only=in_rotation_only,
            descending_name_order=descending_name_order
        )
        return self.render_response(result)


class SongSheetGenerationApiHandler(JsonApiHandler):
    """
    API for tracking a song sheet being generated.
    """
    def put(self, song_id):
        """ PUT """
        track_song_sheet_generation(song_id)
        self.render_response(True)
