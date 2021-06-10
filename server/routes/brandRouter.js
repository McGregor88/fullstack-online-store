const Router = require('express');

const brandController = require('../controllers/brandController');
const checkRole = require('../middleware/checkRoleMiddleware');

const router = new Router();

router.get('/', brandController.getAll);
router.post('/', checkRole('admin'), brandController.create);
router.put('/:id', checkRole('admin'), brandController.update);
router.delete('/:id', checkRole('admin'), brandController.removeById);

module.exports = router;