import { Helmet } from "react-helmet-async";
import Container from "../../Components/Container";
import Accordion from "../Footer Page/Accordion";
import Review from "../Footer Page/Review";
import Stats from "../Footer Page/Stats";
import PopularContest from "./Popular/PopularContest";
import Slider from "./Slider/Slider";


const Home = () => {
    return (
<>
<Helmet>
        <title>Home | Contes Buddy</title>
      </Helmet>
<Container>
<Slider/>
<Stats/>
<PopularContest/>
<Accordion/>
<Review/>
</Container>
</>
    );
};

export default Home;