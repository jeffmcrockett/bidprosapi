const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create item schema & model
const ItemSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Item name is required']
    },
    description: {
        type: String,
        required: false
    },
    value: {
        type: String,
        required: false
    }, 
    writeConcern: {
        w: 'majority',
        j: true,
        wtimeout: 1000
    }
});

const Item = mongoose.model('item',ItemSchema);

module.exports = Item;