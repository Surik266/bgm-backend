import express from 'express';
import path from 'path';
import React from "react";
const PORT = 8888;

const app = express();

app.use('/dashboard', (req, res, next) => {
        res.redirect('/')
});

app.use(express.static(path.resolve(__dirname, './build')));

app.listen(PORT, () => {
    console.log('app launched on ' + PORT)
});
