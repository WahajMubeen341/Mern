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
});


app.get('/bmi', function(req, res){
    res.sendFile(__dirname+'/bmiCalculator.html');
});

app.post('/bmi', function(req, res){
    
    var heightFeat =  Number(req.body.feets);
    var featToInchesHeight = heightFeat*12; 
    var heightInch =  Number(req.body.inches);
    heightInch += featToInchesHeight;
    var weightKG =  Number(req.body.weight);

    var answer = weightKG/(heightInch*heightInch)*703;
    answer = answer.toFixed(2);  

    console.log("answer: "+ answer);

    res.send("<h1>Your BMI is:</h1> " +answer);

});