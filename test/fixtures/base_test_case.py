"""
Base unit testing utilities for use in test suites.
"""
import logging
import mock
import unittest

__all__ = ['TestCase']


class TestCase(unittest.TestCase):
    """
    Minimal base class for test cases.
    """

    def setUp(self):
        super(TestCase, self).setUp()

    def mock_function_in_setup(self, path, **kwargs):
        """
        Used in a TestCase's setUp method to patch a function with a Mock instance. Returns the Mock object.
        """
        patcher = mock.patch(path, **kwargs)
        self.addCleanup(patcher.stop)
        return patcher.start()

    def assertArgsAreRequired(self, method, **kwargs):
        """
        Asserts each of the arguments provided in kwargs are a required argument for the provided method.
        """
        for key in kwargs.iterkeys():
            old_value = kwargs.get(key)
            # test if arg is None
            kwargs[key] = None
            self.assertRaises(ValueError, method, **kwargs)
            # test if arg is empty string
            kwargs[key] = ""
            self.assertRaises(ValueError, method, **kwargs)
            # restore to original value
            kwargs[key] = old_value

    def assertDictAlmostEqual(self, d1, d2, keys_to_ignore=None):
        """
        Assert that two dictionaries are almost equal:
            - Ignore values of keys specified in keys_to_ignore.
        """
        self.assertIsInstance(d1, dict, 'First argument is not a dictionary')
        self.assertIsInstance(d2, dict, 'Second argument is not a dictionary')

        if not keys_to_ignore:
            keys_to_ignore = []
        if not isinstance(keys_to_ignore, list):
            keys_to_ignore = [keys_to_ignore]

        d1_copy = d1.copy()
        d2_copy = d2.copy()

        for key_to_ignore in keys_to_ignore:
            try:
                del d1_copy[key_to_ignore]
            except KeyError:
                logging.debug('ignored key \'%s\' doesn\'t exist in first dictionary.', key_to_ignore)
            try:
                del d2_copy[key_to_ignore]
            except KeyError:
                logging.debug('ignored key \'%s\' doesn\'t exist in second dictionary.', key_to_ignore)

        self.assertDictEqual(d1_copy, d2_copy)
