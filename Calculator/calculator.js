var http = require('http');
var random = require("./custom_module");


requestHandler = function(req, res){
    var url_arr = req.url.split('/');
    var parsed_url = url_arr[1].split('&');
    console.log("parsed_url "+parsed_url);
    if(parsed_url != 'favicon.ico') {
        var first_num = parsed_url[0].split('=')[1];
        var second_num = parsed_url[1].split('=')[1];
        random.a = first_num;
        random.b = second_num;
        if (parsed_url[2] == 'sum') {
            res.end("Sum of " + first_num + " and " + second_num + " is " + random.sum());
        } else if (parsed_url[2] == 'sub') {
            res.end("Sub of "  + first_num + " and " + second_num + " is " +  random.sub());
        } else if (parsed_url[2] == 'mul') {
            res.end("Mul of " + first_num + " and " + second_num + " is " +  random.mul());
        } else if (parsed_url[2] == 'div') {
            res.end("Div of " + first_num + " and " + second_num + " is " +  random.div());
        } else {
            res.end("Dont wander away from home");
        }
    }
}

var server = http.createServer(requestHandler);

server.listen(3001, function(){
    console.log("Started server on port 3001");
})

