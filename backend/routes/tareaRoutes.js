import {
  agregarTarea,
  obtenerTarea,
  actualizarTarea,
  eliminarTarea,
  cambiarEstado,
} from "../controllers/traeaController.js";

import checkAuth from "../middleware/checkAuth.js";

const router = express.router;

router.post("/",checkAuth, agregarTarea);
router
  .route("/:id")
  .get(checkAuth,obtenerTarea)
  .put(checkAuth,actualizarTarea)
  .delete(checkAuth,eliminarTarea);

  router.post('/estado/:id',checkAuth,cambiarEstado);

export default router;
