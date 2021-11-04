const express = require('express');

const app = express();

app.listen(3000, function(){
    console.log('your server has started at port 3000');
});

app.get('/', function(req, res){

    res.sendFile(__dirname+'/index.html');
});