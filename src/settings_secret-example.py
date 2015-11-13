"""
Example of secret settings (which is not checked in to version control)

Rename or copy this file to your own file called settings_secret.py and fill in the keys.
"""
import os


THE_CITY_APP_SECRET = ''

# Localhost specific config
if 'SERVER_SOFTWARE' in os.environ and os.environ['SERVER_SOFTWARE'].startswith('Development'):
    THE_CITY_APP_SECRET = ''


MEDIASITE_JWT_SECRET = ''
