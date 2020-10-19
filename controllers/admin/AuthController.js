const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../../models/User');
const { validationResult } = require('express-validator');

//User Register

exports.register = async(req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array(),
        });
    }

    const { name, email, password } = req.body;

    try {
        // see if user exists;
        let user = await User.findOne({
            email,
        });

        if (user) {
            return res.status(400).json({
                errors: [{
                    msg: 'user already exists',
                }, ],
            });
        }

        user = new User({
            name,
            email,
            password,
        });

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const payload = {
            user,
        };

        jwt.sign(
            payload,
            config.get('jwtSecret'), {
                expiresIn: 360000,
            },
            (err, token) => {
                if (err) throw err;
                res.json({
                    token,
                });
            }
        );
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }
}

// User login

exports.login = async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array(),
        });
    }
    const { email, password } = req.body;
    try {
        // see if user exists;
        let user = await User.findOne({
            email,
        });

        if (!user) {
            return res.status(400).json({
                errors: [{
                    msg: 'Invalid user ',
                }, ],
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                errors: [{
                    msg: 'Invalid password',
                }, ],
            });
        }

        const payload = {
            user,
        };

        jwt.sign(
            payload,
            config.get('jwtSecret'), {
                expiresIn: 360000,
            },
            (err, token) => {
                if (err) throw err;
                res.json({
                    token,
                });
            }
        );
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }
};


//Check User Authentication

exports.authenticatedUserDetails = async(req, res) => {
    try {
        const user = await User.findById(req.user._id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error');
    }
};