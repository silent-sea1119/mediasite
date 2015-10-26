"""
Main view for the app
"""
from app.views import TemplatedView


class MainView(TemplatedView):
    """
    Main view.
    """
    def get(self, *args, **kwargs):
        self.render_reponse('index.html')
