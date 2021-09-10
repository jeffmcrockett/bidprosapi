const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create user schema & model
const UserSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required']
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    writeConcern: {
        w: 'majority',
        j: true,
        wtimeout: 1000
    }
});


const User = mongoose.model('user',UserSchema);

module.exports = User;







// {
//     "name": "Jayden's Home for Homeless People",
//     "organization": "Jayden's Living Room",
//     "email": "jaydensaves@gmail.com",
//     "items": {
//         "name": "One week stay in Jayden's Guest Room"
//     },
//     "users": {
//         "firstName": "Jayden",
//         "lastName": "Gliffenburg",
//         "email": "jaydensaves@gmail.com",
//         "password": "gliffenburg420"
//     }
// }