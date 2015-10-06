
// Dependencies
var express = require('express');
var router = express.Router();

// Model
var List = require('../models/list');

// Routes
List.methods(['get', 'put', 'post', 'delete']);
List.register(router, '/lists');


// Return router
module.exports = router;