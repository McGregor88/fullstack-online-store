const Router = require('express');

const typeController = require('../controllers/typeController');
const checkRole = require('../middleware/checkRoleMiddleware');

const router = new Router();

router.get('/', typeController.getAll);
router.post('/', checkRole('admin'), typeController.create);
router.put('/:id', checkRole('admin'), typeController.update);
router.delete('/:id', checkRole('admin'), typeController.removeById);

module.exports = router;