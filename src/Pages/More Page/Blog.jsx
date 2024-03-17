
import { Helmet } from 'react-helmet-async';
import Container from '../../Components/Container';

const Blog = () => {
    return (
        <div>
          <Helmet>
        <title>Blog | Contes Buddy</title>
      </Helmet>
          <Container>
<section className="bg-white dark:bg-gray-900">
  <div className="container px-6 py-10 mx-auto">
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Our <span className='text-red-500'>Blog & News</span> Portal </h1>
      <button className="focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </div>
    <hr className="my-8 border-gray-200 dark:border-gray-700" />

    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">

      <div  data-aos="zoom-in-up" >
        <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://i.ibb.co/XFY44TJ/photo-1542751371-adc38448a05e.webp" alt />
        <div className="mt-8">
          <span className="text-red-500 uppercase">ESports</span>
          <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
            What do you want to know about ESports
          </h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
          ESports, short for electronic sports, is a form of competition using video games. ESports often takes the form of organized, multiplayer video game competitions, particularly between professional players, played individually or as teams. Multiplayer competitions were long a part of video game culture, but were largely between amateurs until the late 2000s, when the advent of online streaming media platforms, particularly YouTube and Twitch, enabled a surge in participation by professional gamers and spectators.
          </p>
          <div className="flex items-center justify-between mt-4">
            <div>
              <a href="#" className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                John snow
              </a>
              <p className="text-sm text-gray-500 dark:text-gray-400">February 1, 2022</p>
            </div>
            <a href="#" className="inline-block text-red-500 underline hover:text-red-400">Read more</a>
          </div>
        </div>
      </div>

      <div  data-aos="zoom-in-up" >
        <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://i.ibb.co/WKb7m6t/l-18-1-1200x675.jpg" alt />
        <div className="mt-8">
          <span className="text-red-500 uppercase">Gaming</span>
          <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
            All the features you want to know</h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
          ESports, short for electronic sports, is a form of competition using video games. ESports often takes the form of organized, multiplayer video game competitions, particularly between professional players, played individually or as teams. Multiplayer competitions were long a part of video game culture, but were largely between amateurs until the late 2000s, when the advent of online streaming media platforms, particularly YouTube and Twitch, enabled a surge in participation by professional gamers and spectators.
          </p>
          <div className="flex items-center justify-between mt-4">
            <div>
              <a href="#" className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                Arthur Melo
              </a>
              <p className="text-sm text-gray-500 dark:text-gray-400">February 6, 2022</p>
            </div>
            <a href="#" className="inline-block text-red-500 underline hover:text-red-400">Read more</a>
          </div>
        </div>
      </div>

      <div  data-aos="zoom-in-up" >
        <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://i.ibb.co/n6G1G9b/photo-1533174072545-7a4b6ad7a6c3.webp" alt />
        <div className="mt-8">
          <span className="text-red-500 uppercase">Contest</span>
          <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
            Which contest you get from Contes Buddy
          </h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
          Esports, short for electronic sports, is a form of competition using video games. Esports often takes the form of organized, multiplayer video game competitions, particularly between professional players, played individually or as teams. Multiplayer competitions were long a part of video game culture, but were largely between amateurs until the late 2000s, when the advent of online streaming media platforms, particularly YouTube and Twitch, enabled a surge in participation by professional gamers and spectators.
          </p>
          <div className="flex items-center justify-between mt-4">
            <div>
              <a href="#" className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                Tom Hank
              </a>
              <p className="text-sm text-gray-500 dark:text-gray-400">February 19, 2022</p>
            </div>
            <a href="#" className="inline-block text-red-500 underline hover:text-red-400">Read more</a>
          </div>
        </div>
      </div>

      <div  data-aos="zoom-in-up" >
        <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://i.ibb.co/XFY44TJ/photo-1542751371-adc38448a05e.webp" alt />
        <div className="mt-8">
          <span className="text-red-500 uppercase">ESports</span>
          <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
            What do you want to know about ESports
          </h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
          ESports, short for electronic sports, is a form of competition using video games. ESports often takes the form of organized, multiplayer video game competitions, particularly between professional players, played individually or as teams. Multiplayer competitions were long a part of video game culture, but were largely between amateurs until the late 2000s, when the advent of online streaming media platforms, particularly YouTube and Twitch, enabled a surge in participation by professional gamers and spectators.
          </p>
          <div className="flex items-center justify-between mt-4">
            <div>
              <a href="#" className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                John snow
              </a>
              <p className="text-sm text-gray-500 dark:text-gray-400">February 1, 2022</p>
            </div>
            <a href="#" className="inline-block text-red-500 underline hover:text-red-400">Read more</a>
          </div>
        </div>
      </div>

      <div  data-aos="zoom-in-up" >
        <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://i.ibb.co/WKb7m6t/l-18-1-1200x675.jpg" alt />
        <div className="mt-8">
          <span className="text-red-500 uppercase">Gaming</span>
          <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
            All the features you want to know</h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
          ESports, short for electronic sports, is a form of competition using video games. ESports often takes the form of organized, multiplayer video game competitions, particularly between professional players, played individually or as teams. Multiplayer competitions were long a part of video game culture, but were largely between amateurs until the late 2000s, when the advent of online streaming media platforms, particularly YouTube and Twitch, enabled a surge in participation by professional gamers and spectators.
          </p>
          <div className="flex items-center justify-between mt-4">
            <div>
              <a href="#" className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                Arthur Melo
              </a>
              <p className="text-sm text-gray-500 dark:text-gray-400">February 6, 2022</p>
            </div>
            <a href="#" className="inline-block text-red-500 underline hover:text-red-400">Read more</a>
          </div>
        </div>
      </div>

      <div  data-aos="zoom-in-up" >
        <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://i.ibb.co/n6G1G9b/photo-1533174072545-7a4b6ad7a6c3.webp" alt />
        <div className="mt-8">
          <span className="text-red-500 uppercase">Contest</span>
          <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
            Which contest you get from Contes Buddy
          </h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
          Esports, short for electronic sports, is a form of competition using video games. Esports often takes the form of organized, multiplayer video game competitions, particularly between professional players, played individually or as teams. Multiplayer competitions were long a part of video game culture, but were largely between amateurs until the late 2000s, when the advent of online streaming media platforms, particularly YouTube and Twitch, enabled a surge in participation by professional gamers and spectators.
          </p>
          <div className="flex items-center justify-between mt-4">
            <div>
              <a href="#" className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                Tom Hank
              </a>
              <p className="text-sm text-gray-500 dark:text-gray-400">February 19, 2022</p>
            </div>
            <a href="#" className="inline-block text-red-500 underline hover:text-red-400">Read more</a>
          </div>
        </div>
      </div>
      <div  data-aos="zoom-in-up" >
        <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://i.ibb.co/XFY44TJ/photo-1542751371-adc38448a05e.webp" alt />
        <div className="mt-8">
          <span className="text-red-500 uppercase">ESports</span>
          <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
            What do you want to know about ESports
          </h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
          ESports, short for electronic sports, is a form of competition using video games. ESports often takes the form of organized, multiplayer video game competitions, particularly between professional players, played individually or as teams. Multiplayer competitions were long a part of video game culture, but were largely between amateurs until the late 2000s, when the advent of online streaming media platforms, particularly YouTube and Twitch, enabled a surge in participation by professional gamers and spectators.
          </p>
          <div className="flex items-center justify-between mt-4">
            <div>
              <a href="#" className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                John snow
              </a>
              <p className="text-sm text-gray-500 dark:text-gray-400">February 1, 2022</p>
            </div>
            <a href="#" className="inline-block text-red-500 underline hover:text-red-400">Read more</a>
          </div>
        </div>
      </div>

      <div  data-aos="zoom-in-up" >
        <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://i.ibb.co/WKb7m6t/l-18-1-1200x675.jpg" alt />
        <div className="mt-8">
          <span className="text-red-500 uppercase">Gaming</span>
          <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
            All the features you want to know</h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
          ESports, short for electronic sports, is a form of competition using video games. ESports often takes the form of organized, multiplayer video game competitions, particularly between professional players, played individually or as teams. Multiplayer competitions were long a part of video game culture, but were largely between amateurs until the late 2000s, when the advent of online streaming media platforms, particularly YouTube and Twitch, enabled a surge in participation by professional gamers and spectators.
          </p>
          <div className="flex items-center justify-between mt-4">
            <div>
              <a href="#" className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                Arthur Melo
              </a>
              <p className="text-sm text-gray-500 dark:text-gray-400">February 6, 2022</p>
            </div>
            <a href="#" className="inline-block text-red-500 underline hover:text-red-400">Read more</a>
          </div>
        </div>
      </div>

      <div  data-aos="zoom-in-up" >
        <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://i.ibb.co/n6G1G9b/photo-1533174072545-7a4b6ad7a6c3.webp" alt />
        <div className="mt-8">
          <span className="text-red-500 uppercase">Contest</span>
          <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
            Which contest you get from Contes Buddy
          </h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
          Esports, short for electronic sports, is a form of competition using video games. Esports often takes the form of organized, multiplayer video game competitions, particularly between professional players, played individually or as teams. Multiplayer competitions were long a part of video game culture, but were largely between amateurs until the late 2000s, when the advent of online streaming media platforms, particularly YouTube and Twitch, enabled a surge in participation by professional gamers and spectators.
          </p>
          <div className="flex items-center justify-between mt-4">
            <div>
              <a href="#" className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                Tom Hank
              </a>
              <p className="text-sm text-gray-500 dark:text-gray-400">February 19, 2022</p>
            </div>
            <a href="#" className="inline-block text-red-500 underline hover:text-red-400">Read more</a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

            </Container>  
        </div>
    );
};

export default Blog;