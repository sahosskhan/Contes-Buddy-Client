
import { Link } from 'react-router-dom';
import Logo from './Logo';
const Footer = () => {
    const d = new Date();
    let year = d.getFullYear();
    return (
        <footer className="bg-red-50 dark:bg-gray-900">
        <div className="container px-6 py-6 mx-auto">
            <div className="md:flex mt-3 md:-mx-3 md:items-center md:justify-between">
                <h1 className="text-xl font-semibold tracking-tight 
                text-gray-800 md:mx-3 xl:text-2xl dark:text-white">Subscribe our newsletter to get update.</h1>
                
                <div className="mt-6 md:mx-3 shrink-0 md:mt-0 md:w-auto">
                    <a to='/' className="inline-flex items-center justify-center w-full px-4 py-2 text-base text-white duration-300 bg-gray-800 rounded-lg gap-x-3 hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                        <span>Sign Up Now</span>
    
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"stroke="currentColor" className="w-5 h-5">
                            <path d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </a>
                </div>
            </div>
            
            <hr className="my-6 border-gray-200 "/>
    
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div>
                    <p className="font-semibold text-gray-800 dark:text-white">Quick Link</p>
    
                    <div className="flex flex-col items-start mt-5 space-y-2">
                        <Link to='/blog' className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-red-400 hover:underline hover:text-red-500">Blog</Link>
                        <Link to='/gallery' className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-red-400 hover:underline hover:text-red-500">Gallery</Link>
                        <Link to='/book-for-contact' className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-red-400 hover:underline hover:text-red-500">Book For Contact</Link>
                      
                    </div>
                </div>
    
                <div>
                    <p className="font-semibold text-gray-800 dark:text-white">Our Policy</p>
    
                    <div className="flex flex-col items-start mt-5 space-y-2">
                        <Link to='/refund-policy' className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-red-400 hover:underline hover:text-red-500">Refund Policy</Link>
                        <Link to='/privacy-policy' className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-red-400 hover:underline hover:text-red-500">Privacy Policy</Link>
                        <Link to='/community-guideline' className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-red-400 hover:underline hover:text-red-500">Community Guideline</Link>
                    </div>
                </div>
    
                <div>
                    <p className="font-semibold text-gray-800 dark:text-white">Social Media</p>
    
                    <div className="flex flex-col items-start mt-5 space-y-2">
                        <h1 className="flex  hover:text-red-500 justify-center items-center gap-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-red-400 "><i className="text-xl fa-brands fa-twitch"></i> Twitch</h1>

                        <h1 className="flex hover:text-red-500  justify-center items-center gap-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-red-400 "><i className="text-xl fa-brands fa-youtube"></i> Youtube</h1>


                        <h1 className="flex hover:text-red-500  justify-center items-center gap-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-red-400 "><i className="text-xl fa-brands fa-instagram"></i> Instagram</h1>
                        
                    </div>
                </div>
    
                <div>
                    <p className="font-semibold text-gray-800 dark:text-white">Contact Us</p>
    
                    <div className="flex flex-col items-start mt-5 space-y-2">
                    <h1 className="flex hover:text-red-500  justify-center items-center gap-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-red-400 "><i className="text-xl fa-solid fa-square-phone"></i> +8801778030482</h1>

<h1 className="flex hover:text-red-500  justify-center items-center gap-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-red-400 "><i className="text-xl fa-solid fa-headset"></i> support@contes-buddy.com</h1>
                        
                    </div>
                </div>
            </div>
            
            <hr className="my-6 border-gray-200 "/>
            
            <div className="flex flex-col items-center justify-between sm:flex-row">
            <Logo/>
    
                <p className=" text-base text-gray-500 sm:mt-0 dark:text-gray-300">© <span className='text-red-400'>Contest Buddy {year} </span>  All Rights Reserved.</p>
            </div>
        </div>
    </footer>
    );
};

export default Footer;