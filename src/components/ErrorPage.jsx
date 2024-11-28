import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="w-full h-[100vb] bg-gradient-to-t from-[#e28e11] via-red-600 to-blue-800 flex flex-col gap-y-5 justify-center items-center">
      <h1 className="text-9xl font-bold text-white">404</h1>
      <p className="text-4xl font-bold text-white">Page not found.</p>
      <span className="text-3xl font-bold text-white">
        {error.statusText || error.message}{" "}
      </span>
    </div>
  );
}

export default ErrorPage;
