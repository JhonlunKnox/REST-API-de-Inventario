const express = require('express');
const router = express.Router();
const { getAll, getOne, create, update, remove } = require('../controllers/product.controller');
const { verifyToken } = require('../middlewares/auth.middleware');
const { requireAdmin } = require('../middlewares/role.middleware');

// Públicos
router.get('/', getAll);
router.get('/:id', getOne);

// Solo admin
router.post('/', verifyToken, requireAdmin, create);
router.put('/:id', verifyToken, requireAdmin, update);
router.delete('/:id', verifyToken, requireAdmin, remove);

module.exports = router;