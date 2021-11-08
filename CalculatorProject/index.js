const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//const { urlencoded } = require('body-parser');

app.use(express.urlencoded({extended: true}));

app.listen(3000, function(){
    console.log('Your server has started at port 3000');
});

app.get('/', function(req, res){

    res.sendFile(__dirname+'/index.html');
});

app.post('/', function(req, res){

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var answer = num1 - num2;
    res.send("<h1>Thanks for posting</h1> Your answer is : "+answer);
})