require('ignore-styles');

require('@babel/register')({
    ignore: [/(node_moule)/],
    presets: ['@babel/preset-env', '@babel/preset-react']
});

require('./server');
