import { useLoaderData } from "react-router-dom";
import TopSection from "./Contest Details/TopSection";
import ContestInfo from "./Contest Details/ContestInfo";
import Registration from "./Contest Details/Registration";
import Container from '../../Components/Container'

const ContestSPA = () => {
    const data = useLoaderData();
    return (
    
      <Container>
          <div className='max-w-screen-lg mx-auto'>
            <div className='flex flex-col gap-6'>
              <TopSection data={data} />
              
            </div>
            <div className='grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6'>
              <ContestInfo data={data} />
  
              <div className='md:col-span-3 order-first md:order-last mb-10'>
           
                <Registration  data={data} />
              </div>
            </div>
          </div>
          </Container>
     
    );
};

export default ContestSPA;