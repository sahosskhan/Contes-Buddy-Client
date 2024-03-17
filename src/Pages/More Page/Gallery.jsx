const Gallery = () => {
    return (
        <div>
<section className="bg-white dark:bg-gray-900">
  <div className="container px-6 py-10 mx-auto">
    <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Some <span className="text-red-500">Capturing</span> Moments
    </h1>
    <p className="mt-4 text-center text-gray-500 dark:text-gray-300">
    Step into the world of Contes Buddy through our vibrant gallery, where every image tells a story of gaming excitement and community camaraderie.
    </p>
    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
      <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group" style={{backgroundImage: 'url("https://i.ibb.co/WKb7m6t/l-18-1-1200x675.jpg")'}}>
        <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
          <h2 className="mt-4 text-xl font-semibold text-white capitalize">Best ESports Host Of The Year</h2>
          <p className="mt-2 text-lg tracking-wider text-red-400 uppercase ">2023</p>
        </div>
      </div>

      <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group" style={{backgroundImage: 'url("https://i.ibb.co/PgHXZYW/image.png")'}}>
        <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
          <h2 className="mt-4 text-xl font-semibold text-white capitalize">PUBG Global Lan Tournament</h2>
          <p className="mt-2 text-lg tracking-wider text-red-400 uppercase ">2020</p>
        </div>
      </div>

      <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group" style={{backgroundImage: 'url("https://i.ibb.co/n6G1G9b/photo-1533174072545-7a4b6ad7a6c3.webp")'}}>
        <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
          <h2 className="mt-4 text-xl font-semibold text-white capitalize">Gamer Meetup Of Year</h2>
          <p className="mt-2 text-lg tracking-wider text-red-400 uppercase ">2023</p>
        </div>
      </div>

      <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group" style={{backgroundImage: 'url("https://i.ibb.co/WKb7m6t/l-18-1-1200x675.jpg")'}}>
        <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
          <h2 className="mt-4 text-xl font-semibold text-white capitalize">Best ESports Host Of The Year</h2>
          <p className="mt-2 text-lg tracking-wider text-red-400 uppercase ">2023</p>
        </div>
      </div>

      <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group" style={{backgroundImage: 'url("https://i.ibb.co/PgHXZYW/image.png")'}}>
        <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
          <h2 className="mt-4 text-xl font-semibold text-white capitalize">PUBG Global Lan Tournament</h2>
          <p className="mt-2 text-lg tracking-wider text-red-400 uppercase ">2020</p>
        </div>
      </div>

      <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group" style={{backgroundImage: 'url("https://i.ibb.co/n6G1G9b/photo-1533174072545-7a4b6ad7a6c3.webp")'}}>
        <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
          <h2 className="mt-4 text-xl font-semibold text-white capitalize">Gamer Meetup Of Year</h2>
          <p className="mt-2 text-lg tracking-wider text-red-400 uppercase ">2023</p>
        </div>
      </div>

    </div>
  </div>
</section>

        </div>
    );
};

export default Gallery;