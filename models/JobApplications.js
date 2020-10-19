const mongoose = require('mongoose');

const JobApplicationSchema = new mongoose.Schema({
    candidate: {
        type: Schema.Types.ObjectId,
        ref: 'candidate'
    },
    job: {
        type: Schema.Types.ObjectId,
        ref: 'job'
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = JobApplication = mongoose.model('jobApplication', JobApplicationSchema);