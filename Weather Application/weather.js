const express=  require('express');

const app = express();

const https = require('https');
const apiKey="2e4265d3454277475eaf7b565085e3d5";
const city= "Islamabad";
const url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apiKey+"&units=metric";

app.listen(3000, function(){

    console.log("Weather server started at 3000");
});



app.get('/', function(request, response  ){

    response.sendFile(__dirname + "/index.html");


//response.send("Thanks for visiting again");
})

app.post('/', function(request, response){

    response.send("Thanks for sharing");

});


    
// https.get(url, function(res){
//     //console.log("DATA: " + res);
 
//     res.on("data", function(data){
//         var weatherInfo = JSON.parse(data);
//         console.log(weatherInfo);
//         console.log(weatherInfo.main.temp);
//         var weather = weatherInfo.weather[0].main;
//         var temp= weatherInfo.main.temp;
//         var place= weatherInfo.name;
//         var icon= weatherInfo.weather[0].icon;
//         console.log("icon:" +icon);
//         response.write("<h1> Weather in "+ place+" is " + weather+"</h1>");
//         //response.write("<h1> Weather in Pakistan is " + weather+"</h1>");
//         response.write("<img src='http://openweathermap.org/img/wn/"+icon+"@2x.png'></img> \nThe temperature is "+temp +" degree celcius");
//         response.send();
//     });
// });
