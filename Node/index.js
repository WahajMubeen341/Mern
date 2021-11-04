
//require 
var fileSystem =  require('fs');

fileSystem.readFile('dummy.txt', 'utf8', function(err, data){

    if(err) throw err;
    
    console.log("Here is the file:  "+data);

});

app.get('/', function(request, response){

    console.log(response);

})