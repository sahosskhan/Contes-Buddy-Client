/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";


const Slider = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
  const sliders = [
    {img: "https://i.ibb.co/n6G1G9b/photo-1533174072545-7a4b6ad7a6c3.webp", title: "Escape 1", des: "Level up your game, one pixel at a time."}, 
     
     {img: "https://i.ibb.co/XFY44TJ/photo-1542751371-adc38448a05e.webp", title: "Escape 2", des: "Victory is just a respawn away."}, 

    {img: "https://i.ibb.co/G5v8wf5/photo-1603481546579-65d935ba9cdd.webp", title: "Escape 3", des: "Game on, game strong."},

     {img: "https://i.ibb.co/bNrYpc2/photo-1614179924047-e1ab49a0a0cf.webp", title: "Escape 4", des: "Eyes on the screen, heart in the game."},
     
     {img: "https://i.ibb.co/7KYTqwZ/photo-1555581064-8ce820e50679.webp", title: "Escape 5", des: "The only way to fail in esports is to not try."},];
  const prevSlider = () => setCurrentSlider((currentSlider) => currentSlider === 0 ? sliders.length - 1 : currentSlider - 1);
  const nextSlider = () => setCurrentSlider((currentSlider) => currentSlider === sliders.length - 1 ? 0 : currentSlider + 1);
  const isSmallScreen = window.innerWidth <= 768;
  useEffect(() => {
    const interval = setInterval(nextSlider, 3000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup function
}, [currentSlider]);
    return (
        <div className="w-full my-8 h-60 sm:h-96 md:h-[540px] flex flex-col xl:flex-row items-center justify-center gap-5 lg:gap-10  bg-cover before:bg-black/50 before:inset-0 transform duration-1000 ease-linear z-50 overflow-hidden"
        style={{ backgroundImage: `url(${currentSlider === 0 ? sliders[sliders.length - 1].img : sliders[currentSlider - 1].img})`}}>
        {/* arrow */}
        {/* <div className="absolute bottom-1/4 flex gap-3 z-50 px-5">
            
            <button onClick={prevSlider} className="flex justify-center items-center hover:bg-white/30 text-white text-xl rounded-full w-6 h-6 md:w-8 md:h-8">
            <i className="fa-solid fa-angles-left"></i>
            </button>
            
            <button onClick={nextSlider} className="flex justify-center items-center hover:bg-white/30 text-white text-xl rounded-full w-6 h-6 md:w-8 md:h-8">
            <i className="fa-solid fa-angles-right"></i>
            </button>
        </div> */}
        {/* text container here */}
        <div className="w-1/2 px-4 left-0 absolute drop-shadow-lg text-white rounded-lg">
            <q className="text-xs sm:text-sm md:text-base lg:text-3xl">{sliders[currentSlider].des}</q>
        </div>
        {/* slider container */}
        <div className="w-1/2 ml-auto overflow-hidden  absolute -right-5 lg:-right-16 z-50 px-4 py-10">
            <div className="ease-linear duration-300 flex gap-4 items-center"
                style={{ transform: `translateX(-${currentSlider * (isSmallScreen ? 98 : 200)}px)`}}>
                {/* sliders */}
                {sliders.map((slide, inx) => (
                    <img key={inx} src={slide.img}
                        className={`h-[180px] sm:h-[200px] lg:h-[320px] min-w-[90px] lg:min-w-[184px] ${
                            currentSlider - 1 === inx ? 'scale-0' : 'scale-100 delay-500'
                        } drop-shadow-lg shadow-lg shadow-black bg-black/50 duration-300 rounded-lg z-50`}
                        alt={slide.title}/>
                ))}
            </div>
        </div>
    </div>
    );
};

export default Slider;