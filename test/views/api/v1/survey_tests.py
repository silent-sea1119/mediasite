"""
survey_tests
"""
from test.fixtures.appengine import GaeTestCase

from app.views.api.v1.survey import _normalize_data


class NormalizeDataTests(GaeTestCase):
    def test_data_is_converted_to_list_of_QuizAttemptAnswers(self):
        data = {
            '1': 'adm:2',
            '2': 'adm:5',
            '3': 'fai:0',
            '4': 'fai:2'
        }

        actual = _normalize_data(data)
        self.assertEqual(4, len(actual))
        self.assertEqual(1, actual[0].question_number)
        self.assertEqual('adm', actual[0].category)
        self.assertEqual(2, actual[0].answer)
