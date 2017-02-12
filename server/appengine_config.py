"""
AppEngine configuration
"""
from google.appengine.ext import vendor

# Add any libraries installed in the "lib" folder.
try:
    vendor.add('lib')
except ValueError:
    pass  # Likely during a unit test?
