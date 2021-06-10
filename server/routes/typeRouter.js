const Router = require('express');
const typeController = require('../controllers/typeController');

const router = new Router();

router.get('/', typeController.getAll);
router.post('/', typeController.create);
router.put('/:id', typeController.update);
router.delete('/:id', typeController.removeById);

module.exports = router;