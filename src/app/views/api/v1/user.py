"""
API endpoints for users
"""
import json
from app.views.api import JsonApiHandler
from mediasitesdk import MediasiteSDK


class LoginHandler(JsonApiHandler):
    """
    Api for getting single songs by id
    """
    def post(self):
        post_body = json.loads(self.request.body)
        email = post_body['email']
        password = post_body['password']
        result = MediasiteSDK.login(email, password)
        return self.render_response(additional_info=result)
