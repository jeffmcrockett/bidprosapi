const Event = require('../models/event');

let eventController = {
    find: async (req,res,next) => {
        Event.find({name: req.params.name}).then(function(events){
            res.send(events);
        }).catch(next);
    },
    all: async (req,res,next) => {
        Event.find({}).then(function(events){
            res.send(events);
        }).catch(next);
    },
    create: (req,res,next) => {
        Event.create(req.body).then(function(event){
            res.send(event);
        }).catch(next);
    },
    update: (req,res,next) => {
        Event.findOneAndUpdate({_id: req.params.id},req.body).then(function(event){
            Event.findOne({_id: req.params.id}).then(function(event){
                res.send(event);
            }).catch(next);
        }).catch(next);
    },
    delete: (req,res,next) => {
        Event.findOneAndDelete({_id: req.params.id}).then(function(event){
            res.send(event);
        }).catch(next);
    },
}

module.exports = eventController;