
// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on from survey
// ===============================================================================

var friendsArray = require('../data/friends.js');


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
    // API GET Requests that shows the data posted in JSON format
    app.get('/api/friends', function(req, res) {
        res.json(friendsArray);
    });

    // API POST Requests when user submits a form and data to server and pushes & saves it to the userData array
    app.post('/api/friends', function(req, res) {
        console.log(req.body);
        friendsArray.push(req.body);
        console.log('friendsArray updated');
        res.json(true);
    });
};