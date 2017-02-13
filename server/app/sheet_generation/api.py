""" API functions for song sheet generation """
import datetime

from .model import SongSheetGeneration

def track_song_sheet_generation(song_id):
    """ Track a song sheet being generated """
    ssg = SongSheetGeneration(song_id=song_id)
    ssg.put()

    return True


def get_sheets_generated_since_date(song_id, from_date=None):
    """ Get sheets generated for a song id since a date. Defaults to the last 30 days. """
    if not from_date:
        from_date = datetime.datetime.utcnow() - datetime.timedelta(days=30)

    sheets = SongSheetGeneration.query(SongSheetGeneration.song_id == song_id)
    sheets = sheets.filter(SongSheetGeneration.generation_date > from_date)
    return sheets.fetch()
