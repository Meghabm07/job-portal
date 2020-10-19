const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const JobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'category'
    },
    noOfVacancies: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    experiance: [{
        min: {
            type: String,
            required: true
        },
        max: {
            type: String,
            required: true
        }
    }],
    location: {
        type: String,
        required: true
    },
    skills: {
        type: Array,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true
    },
    date: {
        type: Date,
        default: Date.now,
    },

})

module.exports = Job = mongoose.model('job', JobSchema);