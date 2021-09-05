const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create event schema & model
const EventSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    organization: {
        type: String,
        required: [true, 'Organization is required']
    },
    email: {
        type: String,
        required: [true, 'Last name is required']
    },
    items: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Item"
        }
    ],
    users: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ]
});


const Event = mongoose.model('event',EventSchema);

module.exports = Event;