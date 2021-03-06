const Router = require('express');

const deviceController = require('../controllers/deviceController');
const checkRole = require('../middleware/checkRoleMiddleware');

const router = new Router();

router.get('/', deviceController.getAll);
router.get('/:id', deviceController.getById);
router.post('/', checkRole('admin'), deviceController.create);
router.delete('/:id', checkRole('admin'), deviceController.removeById);

module.exports = router;