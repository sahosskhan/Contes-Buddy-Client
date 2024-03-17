/* eslint-disable react/prop-types */
import Heading from "./Heading";
const TopSection = ({data}) => {
    const {imageContest, nameContest,tags} = data;
    return (
        <>
        <Heading title={nameContest} subtitle={tags} />
        <div className='w-full md:h-[60vh] overflow-hidden rounded-xl'>
          <img
            className='object-cover w-full'
            src={imageContest}
            alt='header image'
          />
        </div>
      </>
    );
};

export default TopSection;