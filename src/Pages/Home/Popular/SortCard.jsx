/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const SortCard = ({items}) => {
    const {_id, pcount, nameContest,imageContest,description } = items;
    const descriptionMain = description;
  
    const descriptionSlice = descriptionMain.slice(0, 70);
    return (
        <Link to={`/single-contest/${_id}`}>
        <div  data-aos="zoom-in-up" className="max-w-xl overflow-hidden bg-rose-50 rounded-lg shadow-lg ">
            <img className="object-cover w-full h-48" src={imageContest} alt="image" />
  <div className="px-2 py-3">
  <div className='absolute -mt-48 bg-white px-3 py-1 rounded-lg
 text-black text-lg'>{pcount} <i className="fa-solid fa-people-group"></i></div>
    <h1 className="text-xl font-bold text-red-500 uppercase ">{nameContest}</h1>
    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{descriptionSlice}...</p>
  </div>

</div>

</Link>
    );
};

export default SortCard;