const express = require('express');
const router = express.Router();
const JobController = require('../../controllers/admin/JobController.js');
const { check } = require('express-validator');
const auth = require('../../middleware/auth');

// @route POST api / job
// @desc Store Job
// @access ADMIN

router.post('/', auth, [
    check('title', 'Title is Required').not().isEmpty(),
    check('category', 'Category is Required').not().isEmpty(),
    check('noOfVacancies', 'No of Vacancies is Required').not().isEmpty(),
    check('description', 'description is Required').not().isEmpty(),
    check("experiance.*.min", 'Min Experiance is Required').not().isEmpty(),
    check("experiance.*.max", 'Max Experiance is Required').not().isEmpty(),
    check('location', 'Location is Required').not().isEmpty(),
    check('skills', 'Skills is Required').not().isEmpty(),
], JobController.store);


// @route POST api / job
// @desc returns all job
// @access ADMIN

router.get('/', auth, JobController.getAllJobs);


// @route POST api / job
// @desc get particular job
// @access ADMIN

router.get('/:id', auth, JobController.edit);


// @route POST api / job
// @desc Updates Job
// @access ADMIN

router.put('/:id', auth, [
    check('title', 'Title is Required').not().isEmpty(),
    check('category', 'Category is Required').not().isEmpty(),
    check('noOfVacancies', 'No of Vacancies is Required').not().isEmpty(),
    check('description', 'description is Required').not().isEmpty(),
    check("experiance.*.min", 'Min Experiance is Required').not().isEmpty(),
    check("experiance.*.max", 'Max Experiance is Required').not().isEmpty(),
    check('location', 'Location is Required').not().isEmpty(),
    check('skills', 'Skills is Required').not().isEmpty(),
], JobController.update);



// @route POST api / job
// @desc Deletes Job
// @access ADMIN

router.delete('/:id', auth, JobController.delete);


// @route POST api / job 
// @desc View SIngle Job
// @access ADMIN

router.get('/:id/show', auth, JobController.viewJob);


module.exports = router;