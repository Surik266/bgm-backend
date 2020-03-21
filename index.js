const express = require('express');
const app = express();
app.get('/', function (req, res) {
    res.send('<h1>Hello World from Nodejs!</h1>');
});
const server = app.listen(8888, function () {
    const host = server.address().address;
    const port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
