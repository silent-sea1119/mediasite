"""
Main view for the app
"""
from app.views import TemplatedView


class MainView(TemplatedView):
    """
    Main view.
    """
    def get(self):
        self.render_reponse('index.html')
