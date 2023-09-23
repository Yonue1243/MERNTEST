import Proyecto from "../models/Proyecto.js";

const obtenerProyectos = async (req, res) => {
  const proyectos = await Proyecto.find().where("creador").equals(req.usuario);

  res.json(proyectos);
};

const nuevoProyecto = async (req, res) => {
  const proyecto = new Proyecto(req.body);
  proyecto.creador = req.usuario._id;

  try {
    const proyectoAlmacenado = await proyecto.save();
    res.json(proyectoAlmacenado);
  } catch (error) {
    console.log(error);
  }
};

const obtenerProyecto = async (req, res) => {
  const { id } = req.params;

  const proyecto = await Proyecto.findById(id);

  if (!proyecto) return res.status(404).json({ msg: "No encontrado" });

  if (proyecto.creador.toString() !== req.usuario._id.toString()) return res.status(401).json({ msg: "Acción no válida" });

  res.json(proyecto);
};

const editarProyecto = async (req, res) => {
  const { id } = req.params;

  const proyecto = await Proyecto.findById(id);

  if (!proyecto) return res.status(404).json({ msg: "No encontrado" });

  if (proyecto.creador.toString() !== req.usuario._id.toString()) return res.status(401).json({ msg: "Acción no válida" });

  proyecto.nombre = req.body.nombre || proyecto.nombre;
  proyecto.descripcion = req.body.descripcion || proyecto.descripcion;
  proyecto.fechaEntrega = req.body.fechaEntrega || proyecto.fechaEntrega;
  proyecto.cliente = req.body.cliente || proyecto.cliente;

  try {
    const proyectoAlmacenado = await proyecto.save();
    res.json(proyectoAlmacenado);
  } catch (error) {
    console.log(error);
  }


};

const eliminarProyecto = async (req, res) => {
  const { id } = req.params;

  const proyecto = await Proyecto.findById(id);

  if (!proyecto) return res.status(404).json({ msg: "No encontrado" });

  if (proyecto.creador.toString() !== req.usuario._id.toString()) return res.status(401).json({ msg: "Acción no válida" });

  try {
      await Proyecto.deleteOne();
      res.json({msg: "Proyecto eliminado"});

  } catch (error) {
    console.log(error);
  }
};

const agregarColaborador = async (req, res) => {};

const eliminarColaborador = async (req, res) => {};

const obtenerTareas = async (req, res) => {};

export {
  obtenerProyecto,
  editarProyecto,
  eliminarProyecto,
  agregarColaborador,
  eliminarColaborador,
  obtenerTareas,
  nuevoProyecto,
  obtenerProyectos,
};
