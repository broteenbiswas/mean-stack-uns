var express= require('express');
var router= express.Router();
var ctrluns= require('../controllers/uns.controllers.js');
var ctrluser= require('../controllers/users.controller.js');

module.exports= router;



router.route('/uns').get(ctrluns.unsGetAll);


router.route('/uns/:volid').get(ctrluns.unsGetOne);

router.route('/uns/newvol').post(ctrluns.unsvoladd);

//authentication related routes

router
.route('/vols/register').post(ctrluns.register);

router
.route('/vols/login').post(ctrluser.login);
