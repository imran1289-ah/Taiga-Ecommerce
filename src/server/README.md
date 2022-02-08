# Initial setup
Install [MongoDB Community](https://www.mongodb.com/try/download/community) on your computer.

Run `npm install` in /src/server to download all Node.js dependencies. Run this command again after any new packages are added by other contributors to ensure your local installation is up to date.

# Launching the server
Execute `npm start` in /src/server.

# Testing
TODO

# Project structure
* /src/server/models: MongoDB models
* /src/server/routes: Routes for incoming requests
* /src/server/controllers: Functions to process requests by updating/reading the database
* /src/server/index.js: The application entry point

# Useful resources for Express.js development
* [MDN Express.js tutorial](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs)
* [How to authenticate users using cookies and Passport.js](https://levelup.gitconnected.com/everything-you-need-to-know-about-the-passport-local-passport-js-strategy-633bbab6195)