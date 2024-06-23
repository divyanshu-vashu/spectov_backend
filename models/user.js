const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

// Define the user schema with a courses array
const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    courses: { type: [String], default: ['false', 'false', 'false','false', 'false', 'false','false', 'false'] }, 
    transaction:{type:[String],default:['0','0','0','0' ,'0','0' ,'0','0'  ]},
    coursename:{type:[String],default:['0','0','0','0' ,'0','0' ,'0','0'  ]}

});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, 'mysecretkey', {
        expiresIn: "7d",
    });
    return token;
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
    const schema = Joi.object({
        firstName: Joi.string().required().label("First Name"),
        lastName: Joi.string().required().label("Last Name"),
        email: Joi.string().email().required().label("Email"),
        password: passwordComplexity().required().label("Password"),
        courses: Joi.array().items(Joi.string()).default(['false', 'false', 'false','false', 'false', 'false','false', 'false']),
        transaction: Joi.array().items(Joi.string()).default(['0','0','0','0' ,'0','0' ,'0','0']),
        coursename: Joi.array().items(Joi.string()).default(['0','0','0','0' ,'0','0' ,'0','0'])

    });
    return schema.validate(data);
};

module.exports = { User, validate };
