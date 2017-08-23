
'use strict';

var apiai = require('./module/apiai');

var app = apiai("6e104c0613ec4052a6809afb4ff398ff");

var request = app.textRequest('<Your text query>', {
    sessionId: '<unique session id>'
});

request.on('response', function(response) {
    console.log(response);
});

request.on('error', function(error) {
    console.log(error);
});

request.end();