require('./api/data/db.js');
var express = require('express');
var app = express();
var path= require('path');
var routes= require('./api/route');
var bodyparser= require('body-parser');

app.set('port',3000);
app.use(function(req,res, next){
    console.log(req.method,req.url);
    next();
    });

app.use(express.static(path.join(__dirname,'public folder')));

app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.use(bodyparser.urlencoded({extended : false}));

app.use(bodyparser.json());

 app.use('/api', routes);



app.get('/json',function(req,res){
    console.log("Let us run the application");
    res.status(200).json({"jsonData": true});
});

app.get('/file',function(req,res){
    console.log("Let us run the application");
    res.sendFile(path.join(__dirname, 'app.js'));
});

var server = app.listen(app.get('port'),function(){
    var port = server.address().port;
    console.log("port is "+port);
});
console.log("i am running first");