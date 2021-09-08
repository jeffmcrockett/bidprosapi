const express = require('express');
const Event = require('../models/event');
const User = require('../models/user');
const Item = require('../models/item');
const router = express.Router();

// require 
const userController = require('../controllers/userController.js');
const eventController = require('../controllers/eventController.js');
const itemController = require('../controllers/itemController.js');

// routes for user get, put, post, delete
router.get('/users', userController.all);
router.get('/users/:first/:last', userController.find);
router.get('/users/login/:email/:password', userController.login);
router.put('/users/:id', userController.update);
router.post('/users', userController.create);
router.delete('/users/:id', userController.delete);

// routes for events get, put, post, delete
router.get('/events', eventController.all);
router.get('/events/:name', eventController.find);
router.put('/events/:id', eventController.update);
router.post('/events', eventController.create);
router.delete('/events/:id', eventController.delete);

// routes for items get, post, put, delete
router.get('/items', itemController.all);
router.get('/items/:eventId', itemController.findByEvent);
router.put('/items/:id', itemController.update);
router.post('/items', itemController.create);
router.post('/items/:eventId', itemController.createOnEvent);
router.delete('/items/:id', itemController.delete);

module.exports = router;