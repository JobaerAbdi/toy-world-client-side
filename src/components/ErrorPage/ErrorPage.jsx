import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="flex items-center h-screen p-16 bg-sky-300 text-slate-950">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="mb-10">
          <img
            className="h-96 rounded-lg"
            src="https://aioseo.com/wp-content/uploads/2021/04/how-to-find-and-fix-404-errors-in-wordpress.png.webp"
            alt=""
          />
        </div>
        <div className="max-w-md text-center">
          <p className="text-2xl font-semibold md:text-3xl mb-8">
            SORRY, WE COULD NOT FIND THIS PAGE
          </p>
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded bg-green-600 hover:bg-gray-700 text-gray-100"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
