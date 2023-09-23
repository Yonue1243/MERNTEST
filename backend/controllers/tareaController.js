import Proyecto from "../models/Proyecto.js";
import Tarea from '../models/Tarea.js';

const agregarTarea = async (req, res) => {
  const { proyecto } = req.body;

  const existeProyecto = await Proyecto.findById(proyecto);

  if (!existeProyecto)
    return res.status(404).json({ msg: "Proyecto no encontrado" });

  if (existeProyecto.creador.toString() !== req.usuario._id.toString())
    return res.status(403).json({ msg: "No tienes los permisos para añadir tareas" });

      try {
        const tareaAlmacenada = await Tarea.create(req.body);
        res.json(tareaAlmacenada);
      } catch (error) {
          console.log(error)
      }

      
};



const obtenerTarea = async (req, res) => {
    const {id} = req.params;

    const tarea = await Tarea.findById(id).populate("proyecto");

    if(!tarea) return res.status(404).json({ msg: "Tarea no encontrada" });

    if(tarea.proyecto.creador.toString() !== req.usuario._id.toString())
    return res.status(403).json({ msg: "Acción no permitida" });

    res.json(tarea)

};

const actualizarTarea = async (req, res) => {
    const {id} = req.params;

    const tarea = await Tarea.findById(id).populate("proyecto");

    if(!tarea) return res.status(404).json({ msg: "Tarea no encontrada" });

    if(tarea.proyecto.creador.toString() !== req.usuario._id.toString())
    return res.status(403).json({ msg: "Acción no permitida" });

    tarea.nombre = req.body.nombre || tarea.nombre;
    tarea.descripcion = req.body.descripcion || tarea.descripcion;
    tarea.prioridad = req.body.prioridad || tarea.prioridad;
    tarea.fechaEntrega = req.body.fechaEntrega || tarea.fechaEntrega;

    try {
        const tareaAlmacenada = await tarea.save();

        res.json(tareaAlmacenada)
    } catch (error) {
        console.log(error)
    }



};

const eliminarTarea = async (req, res) => {
    const {id} = req.params;

    const tarea = await Tarea.findById(id).populate("proyecto");

    if(!tarea) return res.status(404).json({ msg: "Tarea no encontrada" });

    if(tarea.proyecto.creador.toString() !== req.usuario._id.toString())
    return res.status(403).json({ msg: "Acción no permitida" });

    try {
        await Tarea.deleteOne();
        res.json({msg: "Tarea eliminada"})
    } catch (error) {
        console.log(error)
    }
};

const cambiarEstado = async (req, res) => {
    
};

export {
  agregarTarea,
  obtenerTarea,
  actualizarTarea,
  eliminarTarea,
  cambiarEstado,
};
