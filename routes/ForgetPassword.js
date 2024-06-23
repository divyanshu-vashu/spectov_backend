const router = require("express").Router();
const { User } = require("../models/user");
const bcrypt = require("bcrypt");
const Joi = require("joi");

router.post("/user/forget-password/:password/:email",async(req,res)=>{
    try{

        const { error } = validate(req.params);
		if (error)
			return res.status(400).send({ message: error.details[0].message });
        const user=await User.findOne({email:req.params.email});
        if(user){
        const salt=await bcrypt.genSalt(Number(6));
        const hashPassword=await bcrypt.hash(req.params.password,salt);
        user.password=hashPassword;
        await user.save();
        return res.json(user);
        }
        return res.status(404).send({message: "No User exist with this email."})

    } catch(err){
        return res.status(500).send("Server Error")
    }
});



const validate = (data) => {
	const schema = Joi.object({
		email: Joi.string().email().required().label("Email"),
		password: Joi.string().required().label("{Password"),
	});
	return schema.validate(data);
};

module.exports = router;