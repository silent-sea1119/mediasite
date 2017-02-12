""" Entry point for the app """
import os

from webapp2 import WSGIApplication

from urls import ROUTES


TEMPLATE_DIR = os.path.join(os.path.abspath(os.path.dirname(__file__)), 'templates')


CONFIG = {
    'webapp2_extras.jinja2': {
        'filters': {},
        'template_path': TEMPLATE_DIR
    }
}


APP = WSGIApplication(routes=ROUTES, config=CONFIG)
