import Container from "../../Components/Container";

const Book = () => {
    return (
        <div>
            <Container>
<section className="bg-white dark:bg-gray-900">
  <div className="container flex items-center justify-center my-10 px-6 mx-auto">
    <form className="w-full max-w-md">
    <h2 className="text-4xl my-10 uppercase font-bold tracking-tight text-center "><span className="px-5 text-center py-2 bg-red-500 rounded-xl border-4 border-black">Contes</span> <span className="text-red-500">Buddy</span></h2>
      <div className="flex items-center justify-center mt-6">
      <a className="w-1/3 pb-4 font-medium text-center text-red-500 capitalize border-b-2 border-red-500 ">
         Processing...<i className="fa-solid fa-person-running"></i>
        </a>
        <a className="w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b dark:border-gray-400 dark:text-gray-300">
          Confirm..<i className="fa-solid fa-square-check"></i>
        </a>
     
      </div>
   
    <div>
  <div className="w-full mt-4">
    <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-red-400 dark:focus:border-red-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-red-300" type="text" placeholder="Enter Your Full Name" aria-label="Email Address" />
  </div>
  <div className="w-full mt-4">
    <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-red-400 dark:focus:border-red-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-red-300" type="number" placeholder="Enter Your Contact Number" aria-label="Email Address" />
  </div>
  <div className="w-full mt-4">
    <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-red-400 dark:focus:border-red-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-red-300" type="email" placeholder="Enter Your Email Address" aria-label="Email Address" />
  </div>
  <div className="w-full mt-4">
    <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-red-400 dark:focus:border-red-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-red-300" type="text" placeholder="Enter Support / Booking Reason" aria-label="Email Address" />
  </div>
  <div className="w-full mt-4">
    <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-red-400 dark:focus:border-red-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-red-300" type="password" placeholder="Enter Verification OTP" aria-label="Password" />
  </div>
</div>




      <div className="mt-6">
        <button className="w-full px-6 py-3 text-xl font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-500 rounded-lg hover:bg-red-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50">
         Book Now
        </button>
      </div>
    </form>
  </div>
</section>
</Container>
        </div>
    );
};

export default Book;