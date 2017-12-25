var express = require('express');
var path = require('path');
var open = require('open');

import webpack from 'webpack';
import config from '../webpack.config.dev';
const compiler = webpack(config)

var port = 8080;
var app = express();

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));
app.get('/', function (req, resp) {
    resp.sendFile(path.join(__dirname,'../src/index.html'));
});

app.listen(port, function(err){
    if (err) {
        console.log(err);
    }else {
        open('http://localhost:'+port);
    }
})