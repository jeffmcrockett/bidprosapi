const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController.js');
const eventController = require('../controllers/eventController.js');
const itemController = require('../controllers/itemController.js');

router.get('/users', userController.all);
router.get('/users/:first/:last', userController.find);
router.put('/users/:id', userController.update);
router.post('/users', userController.create);
router.delete('/users/:id', userController.delete);

router.get('/events', eventController.all);
router.get('/events/:name', eventController.find);
router.put('/events/:id', eventController.update);
router.post('/events', eventController.create);
router.delete('/events/:id', eventController.delete);

router.get('/items', itemController.all);
router.get('/items/:eventId', itemController.findByEvent);
router.put('/items/:id', itemController.update);
router.post('/items', itemController.create);
router.delete('/items/:id', itemController.delete);

module.exports = router;