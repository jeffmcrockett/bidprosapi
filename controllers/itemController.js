const Item = require('../models/item');
const Event = require('../models/event');

let itemController = {
    findByEvent: async (req,res,next) => {
        Item.find({'event': req.params.eventId}).then(function(items){
            res.send(items);
        }).catch(next);
    },
    all: async (req,res,next) => {
        Item.find({}).then(function(items){
            res.send(items);
        }).catch(next);
    },
    create: (req,res,next) => {
        Item.create(req.body).then(function(item){
            res.send(item);
        }).catch(next);
    },
    createOnEvent: (req,res,next) => {
        Item.create(req.body).then(function(item){
            Event.findOneAndUpdate({_id: req.params.eventId},{$push: {'items': item._id}}).then(function(event){
                Event.findOne({_id: req.params.eventId}).populate('items').then(function(event){
                    res.send(event);
                }).catch(next);
            }).catch(next);
        }).catch(next);
    },
    update: (req,res,next) => {
        Item.findOneAndUpdate({_id: req.params.id},req.body).then(function(item){
            Item.findOne({_id: req.params.id}).then(function(item){
                res.send(item);
            }).catch(next);
        }).catch(next);
    },
    delete: (req,res,next) => {
        Item.findOneAndDelete({_id: req.params.id}).then(function(item){
            res.send(item);
        }).catch(next);
    },
}

module.exports = itemController;