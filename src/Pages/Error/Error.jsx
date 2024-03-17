import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate()
    return (
<section className="bg-white dark:bg-gray-900 ">
<Helmet>
        <title>Error | Contes Buddy</title>
      </Helmet>
  <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
    <div className="flex flex-col items-center max-w-sm mx-auto text-center">
      <p className="p-3 text-sm font-medium text-red-500 rounded-full bg-red-50 dark:bg-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
        </svg>
      </p>
      <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">Page not found</h1>
      <p className="mt-4 text-gray-500 dark:text-gray-400">The page you are looking for does not exist. Here are some helpful links:</p>
      <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
        <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"  onClick={() => navigate(-1)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
          </svg>
          <span>Go back</span>
        </button>
        <button className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-red-500 rounded-lg shrink-0 sm:w-auto hover:bg-red-600 dark:hover:bg-red-500 dark:bg-red-600" >
          Take me home
        </button>
      </div>
    </div>
  </div>
</section>

    );
};

export default Error;