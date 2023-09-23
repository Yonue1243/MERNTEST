import express from 'express'


import {obtenerProyecto, editarProyecto, eliminarProyecto, agregarColaborador, eliminarColaborador, obtenerTareas,
    nuevoProyecto, obtenerProyectos} from '../controllers/proyectoController.js';


import checkAuth from '../middleware/checkAuth.js';

const router = express.Router();

router.get('/', checkAuth, obtenerProyectos)
router.post('/', checkAuth, nuevoProyecto)

router.route('/:id').get(checkAuth,obtenerProyecto).put(checkAuth,editarProyecto).delete(checkAuth,eliminarProyecto);


router.post('/agregar-colaborador/:id',checkAuth, agregarColaborador)
router.post('/agregar-colaborador/:id',checkAuth, eliminarColaborador)

export default router