const express = require('express');
const libroController = require('../controllers/libroController');
const router = express.Router();

router.post('/', libroController.crearLibro);
router.get('/', libroController.consultarLibros);
router.put('/:id', libroController.actualizarLibro);
router.delete('/:id', libroController.eliminarLibro);
router.get('/:id', libroController.consultarLibro);

module.exports = router;