"""
user model tests
"""
import jwt
from app.domain.mediasite_jwts import decode_jwt
from app.models.user import User
from test.fixtures.appengine import GaeTestCase


class UserModelTests(GaeTestCase):
    user_dict = {
        'id': 1099636,
        'title': "",
        'first_name': "Graham",
        'last_name': "Holtslander",
        'email': "menello@gmail.com",
        'profile_picture': "https://dcascn3rg03ga.cloudfront.net/accounts/1636/image_attachments/894298/baseuser_1099636-sha1-ef44501a782750077e7014cd7b579871b8bcfed5_thumb.png?1354651327",
        'member': False,
        'staff': False,
        'account_id': 1636,
        'addresses': [],
        'admin_privileges': [
            {
                'sub_title': None,
                'title': "Account Admin",
                'group_id': None
            },
            {
                'sub_title': None,
                'title': "API Admin",
                'group_id': None
            }
        ],
        'inactive': False,
        'inactive_reason': None,
        'subdomain': "cdac",
        'church_name': "Circle Drive Church"
    }

    def test_put_from_city_dict_instantiates_user_with_properties_from_dict(self):
        user = User.put_from_city_dict(self.user_dict).get()
        self.assertEqual('cdac', user.subdomain)

    def test_get_by_user_id_returns_correct_user(self):
        user = User.put_from_city_dict(self.user_dict).get()
        self.assertEqual('cdac', user.subdomain)

    def test_get_key_hash_returns_appropriate_hash_value(self):
        user = User.put_from_city_dict(self.user_dict).get()
        user_jwt_decoded = decode_jwt(user.get_key_hash())
        self.assertEqual(user.id, user_jwt_decoded['usr']['id'])

    def test_get_info_dict_returns_a_dict(self):
        user = User.put_from_city_dict(self.user_dict).get()
        user_dict = user.info_dict
        self.assertTrue(type(user_dict) == dict)

    def test_get_info_dict_returns_sane_info_about_a_user(self):
        user = User.put_from_city_dict(self.user_dict).get()
        user_dict = user.info_dict
        self.assertEqual(self.user_dict['first_name'], user_dict['first_name'])
        self.assertEqual(self.user_dict['last_name'], user_dict['last_name'])
