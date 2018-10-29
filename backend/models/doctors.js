const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DoctorSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    education:{
        type: String,
        required: true,
    },
    hospitalName:{
        type: String,
    },
    address:{
        type: String,
    }
})

const Doctor = mongoose.model('doctor', DoctorSchema);

module.exports = Doctor;
