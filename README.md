# Circle's Mediasite

A re-envisioning of the Circle mediasite, the place to go for song charts and the like!

To get things up and running, here's "all" you have to do:

1. Clone the repository
2. In your cloned directory, run the following commands in sequential order:
  1. `npm install -g bower` (if you don't already have it)
  2. `bower install` (for static assets)
  3. `npm install` (for Javascript-related things and some command-line tools)
  4. `npm run build-js` (to compile the Javascript app)
  5. `npm run build-css` (to compile the styles for the app)
  6. `npm start` (starts a gcloud server appropriately)
3. Navigate to `http://localhost:8078`

Those steps will work best on \*nix. Here's what I found worked for me on Windows (10):

1. Download and install NodeJS from [here](https://nodejs.org/en/)
2. Open the `Node.js command prompt` that should have come with your installation.
3. Follow the steps above!

## Developing the app

For making changes to the Javascript, make sure you've got `npm run watch-js` in your terminal (either a straight-up terminal session on \*nix, or Node.js command prompt on Windows). `npm run build-js` is good for one-time changes.

Similarly, for making changes to the CSS, make sure you've got `npm run watch-css` running. You can run the watch command or just run `npm run build-css` whenever you want to compile the css again. Just don't forget to do it!
