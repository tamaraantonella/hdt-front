import { Link } from "react-router-dom";

export const Spinner = () => {
  return (
    <div className="flex w-full mx-0 h-screen items-center justify-center flex-col">
      <img
        className="w-60 h-60 object-contain"
        src="../../public/giphy.gif"
        alt="Cargando..."
      />
      <Link
        to="/store"
        className="mt-5 border-none px-5 py-3 font-bold transition-all ease-in-out duration-200 bg-green-300 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-white active:bg-green-700"
      >
        <button>Volver a la tienda</button>
      </Link>
    </div>
  );
};
