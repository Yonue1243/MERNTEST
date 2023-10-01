import useProyectos from "../hooks/useProyectos";
import PreviewProyecto from "../components/PreviewProyecto";

const Proyectos = () => {
  const { proyectos } = useProyectos();
  return (
    <>
      <h1 className="font-black text-4xl">Proyectos</h1>

      <div className="bg-white shadow mt-10 rounded-lg ">
        {proyectos.length ? 
          proyectos.map(proyecto =>(
            <PreviewProyecto
            proyecto = {proyecto}
            key={proyecto._id}
            />

          ))
         : (
          <p className="text-center text-gray-600 uppercase p-5">
            No hay proyectos aún
          </p>
        )}
      </div>
    </>
  );
};

export default Proyectos;