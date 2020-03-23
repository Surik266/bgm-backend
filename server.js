const express = require('express');
const path = require('path');
const PORT = 8888;

const app = express();

app.use('/dashboard',function (req, res, next) {
    res.redirect('/')
});

app.use(express.static(path.resolve(__dirname, './build')));

app.listen(PORT, function () {
    console.log('app launched on ' + PORT)
});
