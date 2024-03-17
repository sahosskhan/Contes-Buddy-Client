import  { useState, useEffect } from 'react';

const Stats = () => {
    const [activeUsers, setActiveUsers] = useState(0);
    const [followers, setFollowers] = useState(0);
    const [experience, setExperience] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Update active users count
            if (activeUsers < 500) {
                setActiveUsers(prevCount => prevCount + 10);
            }
            // Update followers count
            if (followers < 100) {
                setFollowers(prevCount => prevCount + 5);
            }
            // Update experience count
            if (experience < 7) {
                setExperience(prevCount => prevCount + 1);
            }
        }, 50);

        // Clear interval on component unmount
        return () => clearInterval(interval);
    }, [activeUsers, followers, experience]);

    return (
        <div>
                    <h1 className="text-center text-5xl my-10 font-bold">Our <span className="text-red-500">Impact</span>   _!</h1>
            <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
                <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
                    <div className="flex flex-col items-center justify-start m-2 lg:m-6">
                        <p className="text-4xl text-red-500 text-center font-bold leading-none lg:text-6xl">{activeUsers.toLocaleString()}K+</p>
                        <p className="text-2xl text-center">Active Users</p>
                    </div>
                    <div className="flex flex-col items-center justify-start m-2 lg:m-6">
                        <p className="text-4xl text-red-500 text-center font-bold leading-none lg:text-6xl">{followers.toLocaleString()}M+</p>
                        <p className="text-2xl text-center">Social Media Followers</p>
                    </div>
                    <div className="flex flex-col items-center justify-start m-2 lg:m-6">
                        <p className="text-4xl text-red-500 font-bold leading-none lg:text-6xl">{experience} Years+</p>
                        <p className="text-2xl text-center ">Years Of Experience</p>
                    </div>
                </div>
            </section>   
        </div>
    );
};

export default Stats;
