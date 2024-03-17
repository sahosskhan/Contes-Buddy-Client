/* eslint-disable react/prop-types */

const ContestInfo = ({data}) => {
    const {description, creatorImage, creatorName, money }=data;
    return (
        <div className='col-span-4 flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <div
            className='
                  text-xl 
                  font-semibold 
                  flex 
                  lg:flex-row 
                  md:flex-row
                  flex-col 
                  items-center
                  gap-2
                '
          >
            <div>Created by {creatorName }</div>
  
            <img
              className='rounded-full'
              height='50'
              width='50'
              alt='Avatar'
              src={creatorImage}
            />
          </div>
          <div
            className='
                  flex 
                  flex-row 
                  items-center 
                  gap-4 
                  font-light
                  text-neutral-500
                '
          >
                   <div className='text-lg text-center text-rose-500 font-bold'><i className="fa-solid fa-money-check-dollar"></i> Total Prize Money <span className="text-gray-600">{money} $</span></div>
            
         
          </div>
        </div>
  
        <hr />
        <div
          className='
            text-lg font-normal  text-gray-500'
        >
          {description}
        </div>
        <hr />
      </div>
    );
};

export default ContestInfo;