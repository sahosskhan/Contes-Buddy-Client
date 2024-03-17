import Container from "../../Components/Container";
import Accordion from "../Footer Page/Accordion";
import Review from "../Footer Page/Review";
import Stats from "../Footer Page/Stats";
import PopularContest from "./Popular/PopularContest";
import Slider from "./Slider/Slider";


const Home = () => {
    return (
<>
<Container>
<Slider/></Container>
<Stats/>
<PopularContest/>
<Accordion/>
<Review/>
</>
    );
};

export default Home;