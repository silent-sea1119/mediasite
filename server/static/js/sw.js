importScripts('/static/vendor/sw-toolbox/sw-toolbox.js');

toolbox.router.default = toolbox.networkFirst;

toolbox.precache([
  '/',
  '/static/css/global.css',
  '/static/js/mediasite.js',
  '/static/js/manifest.js',
  '/static/js/vendor.js',
  '/static/vendor/jquery/dist/jquery.min.js'
]);
