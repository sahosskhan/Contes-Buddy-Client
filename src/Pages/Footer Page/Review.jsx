/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Container from "../../Components/Container";


const Review = () => {
     const array = [{ name: 'Jhankar Mahabub', designation: 'CEO, Programming Hero', testimonialDescription:"Contes Buddy's contests are addictive! With diverse challenges and great prizes, it's a gamer's paradise.",img: 'https://i.ibb.co/7R5nTW6/64d734b2-fbb1-456d-9a7e-117c710a0558.jpg'}, 

     { name: 'Sumit Saha', designation: 'Founder, LWS', testimonialDescription:"Love the seamless experience at Contes Buddy. From registration to winning, it's all about fun and fair play.",img: 'https://i.ibb.co/7R5nTW6/64d734b2-fbb1-456d-9a7e-117c710a0558.jpg'}, 

     { name: 'Hasin Hyder', designation: 'CEO, LWHH', testimonialDescription:"Contes Buddy brings gamers together like never before. The community vibe is electric, and the contests are top-notch.",img: 'https://i.ibb.co/7R5nTW6/64d734b2-fbb1-456d-9a7e-117c710a0558.jpg'}, 

     { name: 'Anisul Islam', designation: 'Teacher, Youtube', testimonialDescription:"Contes Buddy has reignited my passion for gaming. It's where competition meets camaraderie, and every win feels epic.",img: 'https://i.ibb.co/7R5nTW6/64d734b2-fbb1-456d-9a7e-117c710a0558.jpg'}, 

     { name: 'Sangran Khan', designation: 'Founder, Khan Academy', testimonialDescription:"Contes Buddy is my go-to for gaming thrills. The interface is smooth, the contests are fierce, and the prizes are worth the challenge.",img: 'https://i.ibb.co/7R5nTW6/64d734b2-fbb1-456d-9a7e-117c710a0558.jpg'}, 

     { name: 'Vincenzo', designation: 'Gamer, Youtube', testimonialDescription:"Contes Buddy delivers on every level: exciting contests, valuable prizes, and a supportive community. It's a gamer's dream come true.",img: 'https://i.ibb.co/7R5nTW6/64d734b2-fbb1-456d-9a7e-117c710a0558.jpg'},
     
    ];

    const [currentSlider, setCurrentSlider] = useState(0);
    // The slider images array
    const prevSlider = () => setCurrentSlider((currentSlider) => (currentSlider === 0 ? array.length - 2 : currentSlider - 1));
    const nextSlider = () => setCurrentSlider((currentSlider) => (currentSlider === array.length - 2 ? 0 : currentSlider + 1));
    // if you don't want to change the slider automatically then you can just remove the useEffect
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlider();
        }, 3000);
        return () => {
            clearInterval(intervalId);
        };
    }, [currentSlider]);

    const isSmallScreen = window.innerWidth <= 768;
    return (
        <div className="mb-20">
            <Container>
            <h1 className="text-center text-5xl font-bold">Our <span className="text-red-500">Honest</span> Feedback From <span className="text-red-500">Users</span>  _#</h1>
             <div className="max-w-full min-w-[350px]  mx-auto h-[400px] flex flex-row items-center overflow-hidden gap-5 lg:gap-10 px-8 md:px-16 lg:px-24">
            <div className="relative overflow-hidden">
                <div className="absolute w-full h-full flex items-center justify-between z-50 px-5">
                    {/* arrow left */}
                    <button onClick={prevSlider} className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8">
                        <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="black"> <g strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g> <g id="SVGRepo_iconCarrier"><path fill="black" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g>
                        </svg>
                    </button>
                    {/* arrow right */}
                    <button onClick={nextSlider} className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8">
                        <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="black" transform="rotate(180)"> <g strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g> <g id="SVGRepo_iconCarrier"> <path fill="black" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z" ></path></g>
                        </svg>
                    </button>
                </div>
                {/* slider container */}
                <div
                    className="ease-linear duration-300 flex"
                    style={{transform: `translateX(-${currentSlider * (isSmallScreen ? 100 : 50)}%)`}}>
                    {/* sliders */}
                    {array.map((each, idx) => (
                        <div key={idx} className="p-4 min-w-full md:min-w-[50%]">
                            <div className="h-full p-8 bg-red-100 rounded shadow-[0px_4px_12px_rgba(0,0,0,0.1)]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-red-600 mb-4" viewBox="0 0 975.036 975.036">
                                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                </svg>
                                <p className="leading-relaxed mb-6 text-gray-500">{each?.testimonialDescription}</p>
                                <a className="inline-flex items-center">
                                    <img className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" src={each.img} alt="carousel navigate ui"  />
                                    <span className="flex-grow flex flex-col pl-4">
                                        <span className="title-font font-medium text-gray-900">{each.name}</span>
                                        <span className="text-gray-500 text-sm">{each?.designation}</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </Container>
        </div>
    );
};

export default Review;