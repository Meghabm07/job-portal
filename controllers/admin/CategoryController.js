const Category = require('../../models/Category');
const { validationResult } = require('express-validator');


exports.store = async(req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(412).json({
            error: errors.array(),
        });
    }

    const { name } = req.body;

    try {

        let category = await Category.findOne({
            name,
        });

        if (category) {
            return res.status(404).json({
                error: 'category already exists',
            });
        }

        category = new Category({
            name
        });

        await category.save();

        return res.status(200).json({
            message: `${name} Category Created Successfully`,
        });

    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }
}

exports.getAllCategories = async(req, res) => {

    var regexp = new RegExp(req.body.keywords);

    var query = {};

    if (req.body.keywords) {
        await Category
            .find({ name: { $regex: regexp, $options: 'i' } })
            .skip(req.body.noOfItems * (req.body.pageNumber - 1))
            .limit(req.body.noOfItems)
            .exec((err, category) => {
                if (err) {
                    return res.json(err);
                }
                Category.countDocuments(query).exec((count_error, count) => {
                    if (err) {
                        return res.json(count_error);
                    }
                    return res.json({
                        total: count,
                        page: req.body.pageNumber,
                        pageSize: category.length,
                        categories: category
                    });
                });
            });
    } else {
        await Category
            .find()
            .skip(req.body.noOfItems * (req.body.pageNumber - 1))
            .limit(req.body.noOfItems)
            .exec((err, category) => {
                if (err) {
                    return res.json(err);
                }
                Category.countDocuments(query).exec((count_error, count) => {
                    if (err) {
                        return res.json(count_error);
                    }
                    return res.json({
                        total: count,
                        page: req.body.pageNumber,
                        pageSize: category.length,
                        categories: category
                    });
                });
            });
    }

}

exports.edit = async(req, res) => {
    await Category.findById({
            _id: req.params.id,
        },
        function(err, category) {
            if (category) {
                return res.json(category);
            } else {
                return res.status(404).json({
                    error: 'Category not found',
                });
            }
        }
    );
}

exports.update = async(req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(412).json({
            error: errors.array(),
        });
    }

    const { name } = req.body;

    try {

        let category = await Category.findOne({
            name,
        });

        if (category) {
            return res.status(404).json({
                errors: 'category already exists',
            });
        }

        await Category.findByIdAndUpdate(req.params.id, { name: name }, { new: true }, function(err, category) {
            if (category) {

            } else {
                return res.status(404).json({
                    error: 'Category not found',
                });
            }
        });

        return res.status(200).json({
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
                message: `${category.name} Category Deleted Successfully`,
            });
        } else {
            return res.status(404).json({
                error: 'Category not found',
            });
        }
    })
}