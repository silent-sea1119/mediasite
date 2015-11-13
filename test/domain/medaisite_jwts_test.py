"""
Tests for JWT functionality
"""
import unittest

from mock import mock

import jwt
from app.domain.mediasite_jwts import create_jwt_from_dict, create_jwt_from_user_data, decode_jwt

from settings import MEDIASITE_JWT_SECRET


class JwtEncodeDecodeTests(unittest.TestCase):
    user_dict = {
        'id': 1099636,
        'first_name': "Graham"
    }

    def test_create_jwt_from_dict_requires_dictionary_as_parameter(self):
        with self.assertRaises(TypeError):
            create_jwt_from_dict(['stuff'])

    def test_create_jwt_from_dict_requires_city_dict_parameter(self):
        with self.assertRaises(ValueError):
            create_jwt_from_dict(None)

    def test_create_jwt_from_dict_returns_encoded_jwt_string(self):
        actual = create_jwt_from_dict(self.user_dict)
        self.assertEqual(str, type(actual))

    def test_create_jwt_from_dict_encodes_data_properly(self):
        actual = create_jwt_from_dict(self.user_dict)
        decoded_actual = jwt.decode(actual, MEDIASITE_JWT_SECRET)
        self.assertEqual(self.user_dict['id'], decoded_actual['usr']['id'])
        self.assertEqual(self.user_dict['first_name'], decoded_actual['usr']['first_name'])

    def test_create_jwt_from_dict_uses_custom_data_parameter(self):
        actual = create_jwt_from_dict(self.user_dict, data_key='dat')
        decoded_actual = jwt.decode(actual, MEDIASITE_JWT_SECRET)
        del decoded_actual['iss']
        self.assertEqual('dat', decoded_actual.keys()[0])

    def test_create_jwt_from_dict_uses_usr_for_data_param_if_none_provided(self):
        actual = create_jwt_from_dict(self.user_dict)
        decoded_actual = jwt.decode(actual, MEDIASITE_JWT_SECRET)
        del decoded_actual['iss']
        self.assertEqual('usr', decoded_actual.keys()[0])

    def test_create_jwt_from_user_data_adds_permission_and_user_info_to_jwt(self):
        user_info = {
            u'id': 1099636,
            u'first_name': u'Graham',
            u'last_name': u'Holtslander',
            u'email': u'menello@gmail.com'
        }
        user_permissions = {
            u'staff': False,
            u'can_create_in_group_ids': {
                u'albums': [104760, 105013, 105068, 116066, 96293, 104999, 107330, 104934],
                u'events': [104760, 105013, 105068, 116066, 96293, 104999, 107330, 104934],
                u'needs': [104760, 105013, 105068, 116066, 96293, 104999, 107330, 104934],
                u'prayers': [104760, 105013, 105068, 116066, 96293, 104999, 107330, 104934],
                u'topics': [104760, 105013, 105068, 116066, 96293, 104999, 107330, 104934]
            },
            u'admin': True
        }
        user_jwt = create_jwt_from_user_data(user_permissions, user_info)
        jwt_decoded = jwt.decode(user_jwt, MEDIASITE_JWT_SECRET)
        self.assertEqual([104760, 105013, 105068, 116066, 96293, 104999, 107330, 104934], jwt_decoded['usr']['grp'])
        self.assertTrue(jwt_decoded['usr']['adm'])
        self.assertFalse(jwt_decoded['usr']['stf'])
        self.assertEqual(user_info['id'], jwt_decoded['usr']['id'])
        self.assertEqual(user_info['first_name'], jwt_decoded['usr']['fna'])
        self.assertEqual(user_info['last_name'], jwt_decoded['usr']['lna'])

    def test_decode_jwt_requires_jwt_string_be_a_string(self):
        with self.assertRaises(TypeError):
            decode_jwt({'my': 'dict'})

    def test_decode_jwt_requires_jwt_string_parameter(self):
        with self.assertRaises(ValueError):
            decode_jwt(None)

    @mock.patch('app.domain.mediasite_jwts.jwt.decode', mock.MagicMock())
    def test_decode_jwt_allows_unicode_string(self):
        try:
            decode_jwt(u'myunicodestring')
        except TypeError:
            self.fail('should not get here')

    def test_decode_jwt_decodes_jwt_string_properly(self):
        jwt_token_string = create_jwt_from_dict(self.user_dict)
        decoded = decode_jwt(jwt_token_string)
        self.assertEqual(self.user_dict['id'], decoded['usr']['id'])
