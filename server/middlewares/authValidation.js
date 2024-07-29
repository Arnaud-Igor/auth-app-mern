const joi = require("joi");

const inscriptionValidation = async (req, res, next) => {
  const schema = joi.object({
    name: joi.string().min(5).max(100).required(),
    email: joi.string().email().required(),
    password: joi.string().min(5).max(100).required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};

const connexionValidation = async (req, res, next) => {
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(5).max(100).required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};

module.exports = { inscriptionValidation, connexionValidation };
