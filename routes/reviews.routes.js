const express = require('express');
const controller = require('../controllers/reviews.controller');
const validate = require('../middlewares/validate.middleware');
const auth = require('../middlewares/auth.middleware'); // JWT opcional

const router = express.Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', auth, validate, controller.create);
router.put('/:id', auth, validate, controller.update);
router.delete('/:id', auth, controller.remove);

module.exports = router;
