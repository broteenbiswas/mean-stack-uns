var mongoclient= require('mongodb').MongoClient;
var _connection= null;
var dburl= 'mongodb://localhost:27017';
var dname= "meanvols";

var open= function(){
  mongoclient.connect(dburl,function(err,client){
        if(err){
            console.log("DB connection failed");
            return;
        }
        
        _connection=client.db(dname);
    
  });
};

var get=function(){

   
    return _connection;
}

module.exports={
    open: open,
    get : get
};