var express = require('express');
var port = process.env.PORT || 8080;
var app = express();

app.use(express.static(__dirname + '/dist/'));
app.get(/.*/, function(req, res){
    res.sendFile(__dirname + '/dist/index.html');
});
app.listen(port);

console.log('Server has started!...');