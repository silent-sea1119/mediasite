""" Tests for quiz attempts """
from app.models.question import Question
from app.models.quiz_attempt import QuizAttempt, QuizAttemptAnswer

from test.fixtures.appengine import GaeTestCase


class QuizAttemptTests(GaeTestCase):
    def setUp(self):
        super(QuizAttemptTests, self).setUp()

        self.categories = ["adm", "apo", "cou", "dis", "eva", "fai", "giv", "hea", "int", "kno"]

        # To give some consistency, don't randomize the answers (after this point, anyway).
        answers = [5, 2, 0, 2, 0, 5, 2, 0, 0, 0, 2, 5, 2, 2, 2, 2, 2, 5, 0, 2]

        self.attempt = QuizAttempt(user_id=1)
        questions = []
        for i in range(0, 20):
            questions.append(QuizAttemptAnswer(
                question_number=i + 1,
                answer=answers[i],
                category=self.categories[i % 10]
            ))
        self.attempt.questions = questions
        self.attempt.put()

        self.attempt2 = QuizAttempt(user_id=87752083)
        questions = []
        for i in range(0, 20):
            questions.append(QuizAttemptAnswer(
                question_number=i + 1,
                answer=answers[i],
                category=self.categories[i % 10]
            ))
        self.attempt2.questions = questions
        self.attempt2.put()

    def test_graded_categories_returns_aggregated_data_for_categories(self):
        self.assertEqual(len(Question.CATEGORY_MAPPINGS), len(self.attempt.graded_categories))

    def test_graded_categories_come_in_sorted_order(self):
        graded_cats = self.attempt.graded_categories
        self.assertLessEqual(graded_cats[1][1], graded_cats[0][1])
        self.assertLessEqual(graded_cats[2][1], graded_cats[1][1])

    def test_top_categories_returns_list_of_three_items_if_no_ties(self):
        top_cats = self.attempt.top_categories
        self.assertEqual(3, len(top_cats))

    def test_get_by_user_id_raises_value_error_if_None_passed_in(self):
        with self.assertRaises(ValueError):
            QuizAttempt.get_by_user_id(None)

    def test_get_by_user_id_returns_attempt_for_user_that_has_an_attempt(self):
        self.assertIsNotNone(QuizAttempt.get_by_user_id(1))

    def test_get_by_user_id_returns_None_when_no_attempts_exist(self):
        self.assertIsNone(QuizAttempt.get_by_user_id(100))

    def test_get_by_user_id_coerces_to_int_if_string_passed_in(self):
        with self.assertRaises(TypeError):
            QuizAttempt.get_by_user_id([1])  # Raises a TypeError when it goes to convert a list to an int.

    def test_get_by_user_id_returns_attempt_when_long_is_passed_in(self):
        self.assertIsNotNone(QuizAttempt.get_by_user_id(87752083))

    def test_adding_more_questions_does_not_break_graded_categories_calculations(self):
        # Right now, Faith is the highest category.
        self.assertEqual('Faith', self.attempt.graded_categories[0][0])
        # Add some more questions, e.g. adding some paged results.
        self.attempt.questions.append(QuizAttemptAnswer(
            question_number=21,
            answer=5,
            category=self.categories[7]  # 'hea'
        ))
        self.attempt.questions.append(QuizAttemptAnswer(
            question_number=22,
            answer=5,
            category=self.categories[7]  # 'hea'
        ))
        # Healing is now be the highest category.
        self.assertEqual('Healing', self.attempt.graded_categories[0][0])
