importScripts('/static/vendor/sw-toolbox/sw-toolbox.js');

toolbox.precache(['/', '/songs', '/static/css/global.css', '/static/js/mediasite.js']);

toolbox.router.default = toolbox.cacheFirst;
