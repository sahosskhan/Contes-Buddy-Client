
import Container from '../../../Components/Container';
import Loader from '../../../components/Loader';
import useSort from './../../../Hooks/Contest/useSort';
import SortCard from './SortCard';

const PopularContest = () => {
    const {SortContest,isLoading,} =useSort()
    if(isLoading){
        <Loader/>
      }
    return (
        <div className='mb-14'>
               <Container>
        <h1 className="text-center text-5xl mt-10 mb-16 uppercase font-bold">Public <span className="text-red-500"> Recommended</span> Contest _:)</h1>
        <div className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-10">
         
{SortContest?.map((items) => (
<SortCard key={items} items={items}> </SortCard>
))}

</div>
 
</Container>
</div>
    );
};

export default PopularContest;