var http = require('http');
var mustache = require("mustache");
var random = require("./custom_module");


requestHandler = function(req, res){
    console.log("Inside function");

    result = mustache.render("Hello {{first_name}} {{last_name}}",
        {
            'first_name': "Snehal",
            'last_name': 'Singh'
        }
    )

    console.log(result);
    if(req.url == '/'){
        res.end("Welcome " + random());
    }
    else{
        res.end("Dont wander away from home");
        }
    }

   random

var server = http.createServer(requestHandler);

server.listen(3001, function(){
  console.log("Started server on port 3001");
})

