const Router = require('express');
const deviceController = require('../controllers/deviceController');

const router = new Router();

router.get('/', deviceController.getAll);
router.get('/:id', deviceController.getById);
router.post('/', deviceController.create);

module.exports = router;