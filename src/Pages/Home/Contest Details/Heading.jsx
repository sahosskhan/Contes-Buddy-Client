/* eslint-disable react/prop-types */


const Heading = ({ title, subtitle, center }) => {
    return (
        <div className={center ? 'text-center' : 'text-start'}>
       <div className="flex lg:flex-row md:flex-row flex-col justify-between items-start gap-3"> <div className='text-2xl font-bold mt-3'>{title}</div>
        <div className=' text-lg py-2 w-1/2 text-center rounded-md bg-red-500 px-6 text-white mt-2'>{subtitle}</div></div>
      </div>
    );
};

export default Heading;