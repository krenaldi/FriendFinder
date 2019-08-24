// Require the express package
const express = require('express');

// Create express server
const app = express();

// Set initial port
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Require the routes from the app/routing directory
require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);

// server is listening
app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT)
});