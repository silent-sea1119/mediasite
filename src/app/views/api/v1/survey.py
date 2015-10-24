"""
APIs for surveys
"""
import json

from app.domain.questions import get_survey_page_for_user_id, save_user_submitted_answers, \
    get_first_survey_page_for_user_id
from app.models.quiz_attempt import QuizAttemptAnswer
from app.views.api import JsonApiHandler


class SurveyGetFirstPageApiHandler(JsonApiHandler):
    """
    API that gets the first page for a user, somewhat implicitly for now.
    """

    def get(self):
        user_id = self.request.GET.get('userId', 1)
        first_page_to_return = get_first_survey_page_for_user_id(user_id)
        questions, prev_page, next_page = get_survey_page_for_user_id(first_page_to_return, user_id)
        response_data = {
            'userId': user_id,
            'prevPage': prev_page,
            'nextPage': next_page,
        }
        self.return_json_response(questions, additional_info=response_data)


class SurveyPageApiHandler(JsonApiHandler):
    """
    API for getting pages of surveys
    """

    def get(self, user_id, page_num):
        questions, prev_page, next_page = get_survey_page_for_user_id(int(page_num), int(user_id))
        response_data = {
            'prevPage': prev_page,
            'nextPage': next_page,
        }
        self.return_json_response(questions, additional_info=response_data)

    def post(self, user_id):
        submitted = json.loads(self.request.body)
        save_user_submitted_answers(int(user_id), _normalize_data(submitted))
        self.return_json_response(True)


def _normalize_data(json_answers):
    """
    Takes the json loads'd data from Javascript and converts it to what save_user_submitted_answers will expect.
    :return: list of dictionaries
    :rtype: list
    """
    answers = []
    for question_number in json_answers.keys():
        category_answer = json_answers[question_number].split(':')
        answers.append(QuizAttemptAnswer(
            question_number=int(question_number),
            category=category_answer[0],
            answer=int(category_answer[1])
        ))

    return sorted(answers, cmp=lambda x, y: cmp(x.question_number, y.question_number))
