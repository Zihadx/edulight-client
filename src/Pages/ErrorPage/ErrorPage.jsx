import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error } = useRouteError();
  return (
    <div>
      <section className="flex items-center h-screen bg-gray-100 text-gray-900">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto">
          <img className="h-[400px] w-full md:w-[600px]" src="https://i.ibb.co/rFxd11W/pngwing-com.png" alt="" />
          <div className="max-w-md text-center -mt-12">
           
            <p className="text-2xl font-semibold md:text-3xl mb-8">
              {error?.message}
            </p>
            <Link
              to="/"
              className="btn btn-ghost mt-4 bg-purple-900 text-white hover:text-slate-900"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
