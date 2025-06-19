const Joi = require('joi');

const reviewSchema = Joi.object({
    titulo: Joi.string().min(3).required(),
    descripcion: Joi.string().allow(''),
    fechaEstreno: Joi.date().iso().required(),
    puntaje: Joi.number().min(1).max(10).optional()
});

function validateReview(req, res, next) {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
}

module.exports = validateReview;
