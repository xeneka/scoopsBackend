/**
 * Created by Antonio on 27/10/16.
 */

'use strict';

var express = require('express');
var router = express.Router();

router.use("/", function(req,res){

    res.send("OK-DATA");

});
module.exports = router;