"""
Tests for utils
"""
import unittest

from app.utils import list_get_or_default


class ListGetOrDefaultTests(unittest.TestCase):
    def setUp(self):
        self.test_list = [1, 2, 3]

    def test_correct_value_returned_for_index(self):
        item = list_get_or_default(self.test_list, 0)
        self.assertEqual(1, item)

    def test_default_returned_if_index_error(self):
        item = list_get_or_default(self.test_list, 5)
        self.assertIsNone(item)

    def test_user_defined_default_returned_if_index_error(self):
        item = list_get_or_default(self.test_list, 5, 1)
        self.assertEqual(1, item)
