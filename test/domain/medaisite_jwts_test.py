"""
Tests for JWT functionality
"""
import unittest

import jwt
from app.domain.mediasite_jwts import create_jwt_from_city_dict, decode_jwt
from settings import MEDIASITE_JWT_SECRET


class JwtEncodeDecodeTests(unittest.TestCase):
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

    def test_create_jwt_from_city_dict_requires_dictionary_as_parameter(self):
        with self.assertRaises(TypeError):
            create_jwt_from_city_dict(['stuff'])

    def test_create_jwt_from_city_dict_requires_city_dict_parameter(self):
        with self.assertRaises(ValueError):
            create_jwt_from_city_dict(None)

    def test_create_jwt_from_city_dict_returns_encoded_jwt_string(self):
        actual = create_jwt_from_city_dict(self.user_dict)
        self.assertEqual(str, type(actual))

    def test_create_jwt_from_city_dict_encodes_data_properly(self):
        actual = create_jwt_from_city_dict(self.user_dict)
        decoded_actual = jwt.decode(actual, MEDIASITE_JWT_SECRET)
        self.assertEqual(self.user_dict['id'], decoded_actual['usr']['id'])
        self.assertEqual(self.user_dict['first_name'], decoded_actual['usr']['first_name'])

    def test_decode_jwt_requires_jwt_string_be_a_string(self):
        with self.assertRaises(TypeError):
            decode_jwt({'my': 'dict'})

    def test_decode_jwt_requires_jwt_string_parameter(self):
        with self.assertRaises(ValueError):
            decode_jwt(None)

    def test_decode_jwt_decodes_jwt_string_properly(self):
        jwt_token_string = create_jwt_from_city_dict(self.user_dict)
        decoded = decode_jwt(jwt_token_string)
        self.assertEqual(self.user_dict['id'], decoded['usr']['id'])
