const express = require('express');
const router = express.Router();
const { User } = require('../models/user'); 
const Joi = require("joi");


router.get('/details/:email', async (req, res) => {
  try {

    const user = await User.findOne({ email: req.params.email }).select('-password'); 
   // console.log(email)
    if (!user) return res.status(404).send('User not found');
    //console.log(email)
    res.send(user);
  } catch (error) {
    res.status(500).send('Server error');
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
