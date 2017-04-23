"""
API endpoints related to mediasite stats
"""
import json

from app.sheet_generation import get_number_of_sheets_generated_all_time_for_all_songs
from app.song import get_count_of_songs
from app.models.user import get_count_of_users
from app.views.api import JsonApiHandler


class SongPrintOutsHandler(JsonApiHandler):
    """
    Api for getting number of sheets generated.
    """
    def get(self):
        return self.render_response(get_number_of_sheets_generated_all_time_for_all_songs())


class SongCountHandler(JsonApiHandler):
    """
    Api for getting total number of songs in the system
    """
    def get(self):
        return self.render_response(get_count_of_songs())


class UserCountHandler(JsonApiHandler):
    """
    Api for getting total number of songs in the system
    """
    def get(self):
        return self.render_response(get_count_of_users())


