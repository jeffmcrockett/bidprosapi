const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create item schema & model
const ItemSchema = new Schema({
    name: {
        type: String,
        required: [true, 'First name is required']
    },
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event"
    }
});

const Item = mongoose.model('item',ItemSchema);

module.exports = Item;