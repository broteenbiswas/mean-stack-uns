var mongoose= require ('mongoose');


var schema= new mongoose.Schema({
    name : String,
    emailid : String,
    program : String

})

mongoose.model('VolData', schema, 'voldata')