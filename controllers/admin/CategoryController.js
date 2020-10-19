const Category = require('../../models/Category');
const { validationResult } = require('express-validator');


exports.store = async(req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array(),
        });
    }

    const { name } = req.body;

    try {

        let category = await Category.findOne({
            name,
        });

        if (category) {
            return res.status(400).json({
                errors: [{
                    msg: 'category already exists',
                }, ],
            });
        }

        category = new Category({
            name
        });

        await category.save();

        return res.status(400).json({
            message: `${name} Category Created Successfully`,
        });

    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }
}

exports.getAllCategories = async(req, res) => {
    const categories = await Category.find();

    return res.status(400).json({
        categories: categories
    })
}

exports.edit = async(req, res) => {
    await Category.findById({
            _id: req.params.id,
        },
        function(err, category) {
            if (category) {
                return res.json(category);
            } else {
                return res.status(400).json({
                    error: 'Category not found',
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

    const { name } = req.body;

    try {

        let category = await Category.findOne({
            name,
        });

        if (category) {
            return res.status(200).json({
                errors: [{
                    msg: 'category already exists',
                }],
            });
        }

        await Category.findByIdAndUpdate(req.params.id, { name: name }, { new: true }, function(err, category) {
            if (category) {

            } else {
                return res.status(400).json({
                    error: 'Category not found',
                });
            }
        });

        return res.status(400).json({
            message: `${name} Updated Successfully`,
        });

    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }
}

exports.delete = async(req, res) => {
    await Category.findByIdAndRemove(req.params.id, function(err, category) {
        if (category) {
            return res.status(200).json({
                error: `${category.name} Category Deleted Successfully`,
            });
        } else {
            return res.status(400).json({
                error: 'Category not found',
            });
        }
    })
}