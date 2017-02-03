var express = require("express"),
    path = require("path"),
    app = express();

var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));


//app.use(function(req, res, next){
//    console.log("Inside middelware" + req.url);
//    next();
//});

app.use(function(req, res, next){
    if(req.ip == '::ffff:127.0.0.1'){
       res.status(400).send('Not permitted');
    }else{
        next();
    }
});

app.use(function(req, res){
    res.status(200).send('Hello world' + req.ip);
})

app.listen(3001, function(){
    console.log("Server running on port: 3001")
});