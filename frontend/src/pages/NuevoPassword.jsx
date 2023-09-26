import { Link } from "react-router-dom"
const NuevoPassword = () => {
  return (
    <>
    <h1 className="text-sky-600 font-black text-6xl capitalize">
      Restablece tu password y no pierdas acceso a tus {" "}
      <span className="text-slate-700">proyectos</span>
    </h1>

    <form className="my-10 bg-white shadow rounded-lg p-10">
   
      <div className="my-5">
        <label
          className="uppercase text-gray-600 block text-xl font-bold"
          htmlFor="password"
        >
         Nuevo Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Escribe tu nuevo Password"
          className="w-full mt-3 p-3 border rounded-xl bg-grey-50"
        />
      </div>
     
      <input
        type="submit"
        value="Guardar nuevo Password"
        className="bg-sky-700 w-full py-3 mb-5 text-white uppercase font-bold rounded hover:cursor-pointer
         hover:bg-sky-800 transition-colors"
      />
    </form>

    <nav className="lg:flex lg:justify-between">
      <Link
        to="/"
        className="block text-center my-5 text-slate-500 uppercase text-sm"
      >
        Ya tienes una cuenta? Logueate
      </Link>
      <Link
        to="/olvide-password"
        className="block text-center my-5 text-slate-500 uppercase text-sm"
      >
        Olvide mi Password
      </Link>
    </nav>
  </>
  )
}

export default NuevoPassword