const express = require('express');

const app = express();

app.listen(3000, function(){
    console.log("Server started at 3000...");
})


app.get('/', function(request, response){


    response.send('<b>This is a dummy message WAHAJ MUBEEN.</b>');

});

app.get('/wahaj', function(request, response){

    response.send("<h1>This is Wahaj's page</h1> </br> <h2>This is a new day</h2> </br> <h3>You are on a new page</h3>" );
});

app.get('/wahaj2', function(request, response){

    response.send("<h3>This is Wahaj's page</h1> </br> <h3>This is a new day</h2> </br> <h1>You are on a new page</h1>" );
});