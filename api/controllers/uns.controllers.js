var mongoose = require('mongoose');
var VolData = mongoose.model('VolData');

module.exports.unsGetAll= function(req,res){
    console.log('GET the hotels');
  console.log(req.query);

  var offset = 0;
  var count = 5;
  var maxCount = 50;

  if (req.query && req.query.lat && req.query.lng) {
    runGeoQuery(req, res);
    return;
  }

  if (req.query && req.query.offset) {
    offset = parseInt(req.query.offset, 10);
  }

  if (req.query && req.query.count) {
    count = parseInt(req.query.count, 10);
  }

  if (isNaN(offset) || isNaN(count)) {
    res
      .status(400)
      .json({
        "message" : "If supplied in querystring, count and offset must both be numbers"
      });
    return;
  }

  if (count > maxCount) {
    res
      .status(400)
      .json({
        "message" : "Count limit of " + maxCount + " exceeded"
      });
    return;
  }

  VolData
    .find()
    .skip(offset)
    .limit(count)
    .exec(function(err, hotels) {
      console.log(err);
      console.log(hotels);
      if (err) {
        console.log("Error finding volunteers");
        res
          .status(500)
          .json(err);
      } else {
        console.log("Found Volunteers", hotels.length);
        res
          .json(hotels);
      }
    });
};


module.exports.unsGetOne= function(req,res){
  var id = req.params.volid;

  console.log('GET VolId', id);

  VolData
    .findById(id)
    .exec(function(err, doc) {
      var response = {
        status : 200,
        message : doc
      };
      if (err) {
        console.log("Error finding hotel");
        response.status = 500;
        response.message = err;
      } else if(!doc) {
        console.log("VolID not found in database", id);
        response.status = 404;
        response.message = {
          "message" : "Volunteer ID not found " + id
        };
      }
      res
        .status(response.status)
        .json(response.message);
    });

};

var _splitArray = function(input) {
  var output;
  if (input && input.length > 0) {
    output = input.split(";");
  } else {
    output = [];
  }
  return output;
};

module.exports.unsvoladd= function(req,res){
    console.log("add new vol");
    console.log(req.body );
    res.status(200).json(req.body);
};


module.exports.register = function(req, res) {
  console.log('registering user');

  var name = req.body.name;
  var emailid = req.body.emailid;
  var program = req.body.program;


  console.log(name,emailid,program);

  VolData.create({
    name: name,
    emailid: emailid,
    program: program
  }, function(err, vol) {
    if (err) {
      console.log(err);
      res.status(400).json(err);
    } else {
      console.log('vol created', vol);
      res.status(201).json(vol);
    }
  });
};


