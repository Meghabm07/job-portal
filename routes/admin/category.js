const express = require('express');
const router = express.Router();
const CategoryController = require('../../controllers/admin/CategoryController');
const { check } = require('express-validator');
const auth = require('../../middleware/auth');

// @route POST api / category
// @desc Store Category
// @access ADMIN

router.post('/', auth, [
    check('name', 'Name is Required').not().isEmpty()
], CategoryController.store);


// @route POST api / category
// @desc returns all category
// @access ADMIN

router.get('/', auth, CategoryController.getAllCategories);


// @route POST api / category
// @desc get particular category
// @access ADMIN

router.get('/:id', auth, CategoryController.edit);


// @route POST api / category
// @desc Updates Category
// @access ADMIN

router.put('/:id', auth, [
    check('name', 'Name is Required').not().isEmpty()
], CategoryController.update);



// @route POST api / category
// @desc Deletes Category
// @access ADMIN

router.delete('/:id', auth, CategoryController.delete);

module.exports = router;