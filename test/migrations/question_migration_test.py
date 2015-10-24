"""
Tests for question_migration
"""
from app.models.question import Question
from app.migrations.question_migration import import_questions

from test.fixtures.appengine import GaeTestCase


class QuestionModelTests(GaeTestCase):
    def setUp(self):
        super(QuestionModelTests, self).setUp()

        import_questions()

    def test_180_questions_created_after_migration(self):
        self.assertEqual(180, len(Question.get_all_questions()))
