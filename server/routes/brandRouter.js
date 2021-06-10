const Router = require('express');
const brandController = require('../controllers/brandController');

const router = new Router();

router.get('/', brandController.getAll);
router.post('/', brandController.create);
router.put('/:id', brandController.update);
router.delete('/:id', brandController.removeById);

module.exports = router;