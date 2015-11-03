"""
The City SDK tests
"""
import unittest

from thecitysdk import TheCitySDK


class CitySdkUserIsInWorshipArtsTests(unittest.TestCase):
    def test_someone_in_wa_band_and_vocals_can_get_in(self):
        user_info = {
            'can_create_in_group_ids':
                {
                    'topics': [104999]
                }
        }
        self.assertTrue(TheCitySDK.user_is_in_worship_arts(user_info))

    def test_someone_in_wa_technical_team_can_get_in(self):
        user_info = {
            'can_create_in_group_ids':
                {
                    'topics': [104934]
                }
        }
        self.assertTrue(TheCitySDK.user_is_in_worship_arts(user_info))

    def test_someone_in_wa_audio_team_can_get_in(self):
        user_info = {
            'can_create_in_group_ids':
                {
                    'topics': [100800]
                }
        }
        self.assertTrue(TheCitySDK.user_is_in_worship_arts(user_info))

    def test_someone_in_wa_handbells_can_get_in(self):
        user_info = {
            'can_create_in_group_ids':
                {
                    'topics': [107330]
                }
        }
        self.assertTrue(TheCitySDK.user_is_in_worship_arts(user_info))

    def test_someone_in_wa_design_team_can_get_in(self):
        user_info = {
            'can_create_in_group_ids':
                {
                    'topics': [104932]
                }
        }
        self.assertTrue(TheCitySDK.user_is_in_worship_arts(user_info))
