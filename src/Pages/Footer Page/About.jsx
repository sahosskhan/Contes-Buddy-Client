

const About = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container max-w-xl my-16 mx-auto space-y-16 lg:px-8 lg:max-w-7xl">
            <div>
                <h2 className="text-4xl uppercase font-bold tracking-tight text-center "><span className="px-5 text-center py-2 bg-red-500 rounded-xl border-4 border-black">Contes</span> <span className="text-red-500">Buddy</span></h2>
                <p className="max-w-7xl mx-auto mt-12 text-2xl text-center "><q>Welcome to Contes Buddy, your ultimate destination for all things gaming contests!</q></p>
            </div>
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                    <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-red-500">Our Mission</h3>
                    <p className="mt-3 text-lg dark:text-gray-400">At Contes Buddy, we are passionate about gaming and fostering a vibrant community of gamers from around the world. Whether you are a seasoned pro or just starting your gaming journey, we are here to provide you with exciting opportunities to showcase your skills, compete against others, and win fantastic prizes.</p>
                    <div className="mt-12 space-y-12">
                
                        <div className="flex text-center items-center">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center w-12 h-12 rounded-md text-white bg-red-500">
                                <i className="fa-solid fa-infinity"></i>
                                </div>
                            </div>
                            <div className="ml-4">
                                <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Diverse contests, endless fun</h4>
                            </div>
                        </div>
                        <div className="flex text-center items-center">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center w-12 h-12 rounded-md text-white bg-red-500">
                                <i className="fa-solid fa-rectangle-list"></i>
                                </div>
                            </div>
                            <div className="ml-4">
                                <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Simple, user-friendly interface</h4>
                            </div>
                        </div>
                        <div className="flex text-center items-center">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center w-12 h-12 rounded-md text-white bg-red-500">
                                <i className="fa-solid fa-gauge-high"></i>
                                </div>
                            </div>
                            <div className="ml-4">
                                <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Quick registration, instant gaming excitement</h4>
                            </div>
                        </div>

                  
                    </div>
                </div>
                <div aria-hidden="true" className="mt-10 lg:mt-0">
                    <img src="https://i.ibb.co/PgHXZYW/image.png" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
                </div>
            </div>
            <div>
                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                    <div className="lg:col-start-2">
                        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-red-500">Our Vision</h3>
                        <p className="mt-3 text-lg dark:text-gray-400">Our platform is designed to bring together gamers of all backgrounds and interests, offering a diverse array of contests across various genres and platforms. From adrenaline-pumping multiplayer battles to cerebral strategy challenges, there is something for everyone at Contes Buddy.</p>
                        <div className="mt-12 space-y-12">
                        <div className="flex text-center items-center">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center w-12 h-12 rounded-md text-white bg-red-500">
                                <i className="fa-solid fa-gamepad"></i>
                                </div>
                            </div>
                            <div className="ml-4">
                                <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Inclusive for all skill levels</h4>
                            </div>
                        </div>

                        <div className="flex text-center items-center">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center w-12 h-12 rounded-md text-white bg-red-500">
                                <i className="fa-solid fa-trophy"></i>
                                </div>
                            </div>
                            <div className="ml-4">
                                <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Tailored prizes for every gamer</h4>
                            </div>
                        </div>
                        <div className="flex text-center items-center">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center w-12 h-12 rounded-md text-white bg-red-500">
                                <i className="fa-solid fa-earth-americas"></i>
                                </div>
                            </div>
                            <div className="ml-4">
                                <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Thriving global gaming community</h4>
                            </div>
                        </div>
                 
                        </div>
                    </div>
                    <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                        <img src="https://i.ibb.co/WKb7m6t/l-18-1-1200x675.jpg" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default About;