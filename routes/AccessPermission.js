const express = require('express');
const router = express.Router();
const { User } = require('../models/user'); 
const Joi = require("joi");

router.put('/enroll/permission/:email/:index', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.params.email });
        if (user) {
            user.courses[req.params.index] ='true';
            await user.save();
            return res.json(user); 
        } else {
            return res.status(404).send('User not found'); 
        }
    } catch (err) {
        return res.status(500).send('Server error'); 
    }
});

const validate = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label("Email"),
        password: Joi.string().required().label("Password"),
    });
    return schema.validate(data);
};

module.exports = router;