"""
Domain functions dealing with JWTs (JSON Web Tokens)
"""
import jwt

from settings import MEDIASITE_JWT_SECRET


def create_jwt_from_dict(info_dict, data_key='usr'):
    """
    https://jwt.io
    Creates a JWT and returns the encoded string.
    :param info_dict: dict
    :param data_key: str to use for the key for info_dict in the JWT
    :return: string
    """
    if not info_dict:
        raise ValueError('info_dict is required')
    if not isinstance(info_dict, dict):
        raise TypeError('info_dict must be of type dict')

    payload = {
        data_key: info_dict,
        'iss': 'mediasite'
    }

    return jwt.encode(payload, MEDIASITE_JWT_SECRET)


def create_jwt_from_user_data(user_permissions, user_info):
    """
    Create a JWT from user data, for the purpose of storing said info on client-side and in datastore.
    :param user_permissions: dict contains permissions for the user on The City
    :param user_info: dict contains information about the user (name, title, etc.)
    :return: str JWT for this data
    """
    return create_jwt_from_dict({
        'grp': user_permissions['can_create_in_group_ids']['topics'],
        'adm': user_permissions['admin'],
        'stf': user_permissions['staff'],
        'id': user_info['id'],
        'fna': user_info['first_name'],
        'lna': user_info['last_name']
    })


def decode_jwt(jwt_string):
    """
    Decodes a jwt string using the mediasite secret key.
    :param jwt_string: string
    :return: dict of information
    """
    if not jwt_string:
        raise ValueError('jwt_string is required')
    if not isinstance(jwt_string, str) and not isinstance(jwt_string, unicode):
        raise TypeError('jwt_string must be of type str or unicode')

    return jwt.decode(jwt_string, key=MEDIASITE_JWT_SECRET)
