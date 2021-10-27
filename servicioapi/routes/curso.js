const express = require('express');
const cursoController = require('../controllers/cursoController');
const router = express.Router();

// router.post('/', () => {
//     console.log('creando curso...');
// })

router.post('/', cursoController.crearCurso);
router.get('/', cursoController.consultarCursos);
router.put('/:id', cursoController.actualizarCurso);
router.delete('/:id', cursoController.eliminarCurso);
router.get('/:id', cursoController.consultarCurso);

module.exports = router;