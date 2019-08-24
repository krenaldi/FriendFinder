// Require the path package to get the correct file path for html files
const path = require('path');

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
    // homepage route
    app.get('/',(req,res)=>{
        console.log('Root route hit');
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });
    // view survey route
    app.get('/survey',(req,res)=>{
        console.log('Survey route hit');
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });
};