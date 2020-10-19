const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    skills: [{
        type: String,
        required: true
    }],
    experiance: [{
        type: Number,
        required: true
    }],
    resume: {
        type: String,
        required: true
    },
    ctc: {
        type: String,
        required: true
    },
    ectc: {
        type: String,
        required: true
    },
    noticePeriod: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
    },

});

module.exports = Candidate = mongoose.model('candidate', CandidateSchema);