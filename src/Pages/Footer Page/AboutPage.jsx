
import Container from "../../Components/Container";
import About from "./About";
import CEOSay from "./CEOSay";
import Company from "./Company";
import Team from "./Team";


const AboutPage = () => {
    return (
        <div>
     <Container>
      <About/>  
  <CEOSay/>
  <Company/>
  <Team/>
     </Container>
        </div>
    );
};

export default AboutPage;