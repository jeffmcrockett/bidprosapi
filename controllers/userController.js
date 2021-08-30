const User = require('../models/user');

let userController = {
    find: async (req,res,next) => {
        User.find({firstName: req.params.first, lastName: req.params.last}).then(function(users){
            res.send(users);
        }).catch(next);
    },
    all: async (req,res,next) => {
        User.find({}).then(function(users){
            res.send(users);
        }).catch(next);
    },
    create: (req,res,next) => {
        User.create(req.body).then(function(user){
            res.send(user);
        }).catch(next);
    },
    update: (req,res,next) => {
        User.findOneAndUpdate({_id: req.params.id},req.body).then(function(user){
            User.findOne({_id: req.params.id}).then(function(user){
                res.send(user);
            }).catch(next);
        }).catch(next);
    },
    delete: (req,res,next) => {
        User.findOneAndDelete({_id: req.params.id}).then(function(user){
            res.send(user);
        }).catch(next);
    },
}

module.exports = userController;