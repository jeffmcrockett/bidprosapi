const Item = require('../models/item');

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