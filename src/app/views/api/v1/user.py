"""
API endpoints for users
"""
import json
from app.models.user import User
from app.views.api import JsonApiHandler
from mediasitesdk import MediasiteSDK


class LoginHandler(JsonApiHandler):
    """
    Api for logging users in
    """
    def post(self):
        post_body = json.loads(self.request.body)
        user_id = int(post_body.get('userId', 0))

        user = User.get_by_user_id(user_id) if user_id else None

        result = {
            'authenticated': True if user else False,
            'token': user.get_key_hash() if user else None
        }

        return self.render_response(additional_info=result)


class GetUserInfoHandler(JsonApiHandler):
    """
    Api for getting user info (once they're logged in)
    """
    def get(self, user_id):
        user_id = int(user_id if user_id else 0)

        # TODO: Cache this for quicker retrieval? No need to look it all up every time.
        user = User.get_by_user_id(user_id) if user_id else None
        result = user.get_info_dict() if user else None

        return self.render_response(result)
