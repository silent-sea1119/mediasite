"""
__init__.py
"""
from webapp2 import RequestHandler, cached_property
from webapp2_extras import jinja2


class TemplatedView(RequestHandler):

    @cached_property
    def jinja2(self):
        """
        Get that jinja fired up
        """
        return jinja2.get_jinja2(app=self.app)

    def render_reponse(self, template, **context):
        """
        Render a jinja2 template and context.
        """
        content = self.jinja2.render_template(template, **context)
        self.response.write(content)
