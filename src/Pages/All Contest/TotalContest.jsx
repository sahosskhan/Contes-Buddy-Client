import { Helmet } from "react-helmet-async";
import Container from "../../Components/Container";
import AllContest from "../Home/AllContest";


const TotalContest = () => {
    return (
        <Container>
            <Helmet>
        <title>All Contest | Contes Buddy</title>
      </Helmet>
        <AllContest/> 
         </Container>
    );
};

export default TotalContest;