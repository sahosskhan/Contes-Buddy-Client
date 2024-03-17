import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Card = ({ContestFilter}) => {
const {imageContest, nameContest, money, pcount,_id} = ContestFilter;
    return (
        <Link to={`/single-contest/${_id}`}>
          <div className='flex flex-col gap-2 w-full '>
<div className='aspect-square w-full relative overflow-hidden rounded-xl'>
<img className='object-cover h-full w-full group-hover:scale-110 transition' src={imageContest}
 alt='contest'/>
<div className='absolute top-3 right-3 bg-red-500 px-3 py-1 rounded-lg
 text-black text-lg'>{pcount} <i className="fa-solid fa-people-group"></i></div>
</div>
<div className='font-semibold text-xl text-center'>{nameContest}</div>
<div className=' text-lg font-medium text-center rounded-lg py-2 px-6 text-white bg-red-400'>Prize Money: {money} $</div>
</div>   
        </Link>
    );
};

export default Card;