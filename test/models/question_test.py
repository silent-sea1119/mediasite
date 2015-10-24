"""
Question model tests.
"""
from app.migrations.question_migration import import_questions
from app.models.question import Question
from test.fixtures.appengine import GaeTestCase


class QuestionModelTests(GaeTestCase):
    def setUp(self):
        super(QuestionModelTests, self).setUp()

        self.question1 = Question()
        self.question1.text = 'Fake text'
        self.question1.category = 'adm'
        self.question1.question_number = 120
        self.question1.put()
        self.question2 = Question()
        self.question2.text = 'Fake text'
        self.question2.category = 'fai'
        self.question2.question_number = 121
        self.question2.put()
        self.question3 = Question()
        self.question3.text = 'Fake text'
        self.question3.category = 'int'
        self.question3.question_number = 122
        self.question3.put()

    def test_pretty_category_returns_properly(self):
        self.assertEqual('Administration (Leadership)', self.question1.pretty_category)

    def test_get_all_questions_returns_all_questions(self):
        self.assertEqual(3, len(Question.get_all_questions()))

    def test_get_all_questions_ordered_returns_ascending_order(self):
        questions = Question.get_all_questions(True)
        self.assertEqual(120, questions[0].question_number)
        self.assertEqual(121, questions[1].question_number)
        self.assertEqual(122, questions[2].question_number)


class QuestionModelGetQuestionsByNumberRangeTests(GaeTestCase):

    def test_from_number_is_required(self):
        with self.assertRaises(ValueError):
            Question.get_questions_by_number_range(None, 50)

    def test_to_number_is_required(self):
        with self.assertRaises(ValueError):
            Question.get_questions_by_number_range(50, None)

    def test_number_range_21_to_40_returns_20_questions(self):
        import_questions()

        quest_range = Question.get_questions_by_number_range(21, 40)
        self.assertEqual(20, len(quest_range))
