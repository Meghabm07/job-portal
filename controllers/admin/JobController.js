const Job = require('../../models/Job');
const { validationResult } = require('express-validator');


exports.store = async(req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array(),
        });
    }

    const {
        title,
        category,
        noOfVacancies,
        description,
        experiance,
        location,
        skills
    } = req.body;

    try {

        let job = await Job.findOne({
            title,
        });

        if (job) {
            return res.status(400).json({
                errors: [{
                    msg: 'job already exists',
                }, ],
            });
        }

        job = new Job({
            title,
            category,
            noOfVacancies,
            description,
            experiance,
            location,
            skills
        });

        await job.save();

        return res.status(400).json({
            message: `${title} Job Created Successfully`,
        });

    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }
}

exports.getAllJobs = async(req, res) => {
    const jobs = await Job.find();

    return res.status(400).json({
        jobs: jobs
    })
}

exports.edit = async(req, res) => {
    await Job.findById({
            _id: req.params.id,
        },
        function(err, job) {
            if (job) {
                return res.json(job);
            } else {
                return res.status(400).json({
                    error: 'Job not found',
                });
            }
        }
    );
}

exports.update = async(req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array(),
        });
    }

    const {
        title,
        category,
        noOfVacancies,
        description,
        experiance,
        location,
        skills
    } = req.body;

    try {

        let job = await Job.findOne({
            title,
        });

        if (job) {
            return res.status(200).json({
                errors: [{
                    msg: 'job already exists',
                }],
            });
        }

        await Job.findByIdAndUpdate(req.params.id, {
            title,
            category,
            noOfVacancies,
            description,
            experiance,
            location,
            skills
        }, { new: true }, function(err, job) {
            if (job) {

            } else {
                return res.status(400).json({
                    error: 'Job not found',
                });
            }
        });

        return res.status(400).json({
            message: `${title} Updated Successfully`,
        });

    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }
}

exports.delete = async(req, res) => {
    await Job.findByIdAndRemove(req.params.id, function(err, job) {
        if (job) {
            return res.status(200).json({
                error: `${job.title} Job Deleted Successfully`,
            });
        } else {
            return res.status(400).json({
                error: 'Job not found',
            });
        }
    })
}


exports.viewJob = async(req, res) => {
    await Job.findById({
            _id: req.params.id,
        },
        function(err, job) {
            if (job) {
                return res.json(job);
            } else {
                return res.status(400).json({
                    error: 'Job not found',
                });
            }
        }
    );
}