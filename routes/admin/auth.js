const express = require('express');
const router = express.Router();
const AuthController = require('../../controllers/admin/AuthController');
const { check } = require('express-validator');
const auth = require('../../middleware/auth');

// @route POST api / register
// @desc Register User
// @access ADMIN

router.post(
    '/register', [
        check('name', 'Name is Required').not().isEmpty(),
        check('email', 'Email is required').isEmail(),
        check('password', 'Password is required').isLength({
            min: 6,
        }),
    ],
    AuthController.register
);

// @route GET api / register
// @desc Get All Users
// @access ADMIN

router.post(
    '/login', [
        check('email', 'Email is required').isEmail(),
        check('password', 'Password is required').exists()
    ],
    AuthController.login
);

//@route  GET api/auth
//@desc   authenticate user details
//@access Public

router.get('/user', auth, AuthController.authenticatedUserDetails);


module.exports = router;