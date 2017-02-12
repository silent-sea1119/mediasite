"""
Example of secret settings (which is not checked in to version control)

Rename or copy this file to your own file called settings_secret.py and fill in the keys.

Grab these secrets from The City's Admin area.
"""
import os


THE_CITY_APP_SECRET = '5455ae706e901d2e3fb0cc293fdd57e4e5cbb712b7f83a18435789fc9559291e'

# Localhost specific config
if 'SERVER_SOFTWARE' in os.environ and os.environ['SERVER_SOFTWARE'].startswith('Development'):
    THE_CITY_APP_SECRET = '05fc71a99f00dacb63e1b0829aed17caeb67aa1096335fdd85a52cbb9e744ec8'
    if THE_CITY_APP_SECRET == '':
        print '******** THE CITY APP SECRET IS NOT SET AND OAUTH WILL NOT SUCCEED ********'


MEDIASITE_JWT_SECRET = ''
