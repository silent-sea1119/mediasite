"""
Domain functions dealing with JWTs (JSON Web Tokens)
"""
import jwt

from settings import MEDIASITE_JWT_SECRET


def create_jwt_from_city_dict(city_dict):
    """
    Creates a JWT and returns the encoded string.
    :param city_dict: dict
    :return: string
    """
    if not city_dict:
        raise ValueError('city_dict is required')
    if not isinstance(city_dict, dict):
        raise TypeError('city_dict must be of type dict')

    payload = {
        'usr': city_dict,
        'iss': 'mediasite'
    }

    return jwt.encode(payload, MEDIASITE_JWT_SECRET)


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
