// import classes from './HomePage.module.css';

import Preview from "../components/Preview";
import Wrapper from "../components/UI/Wrapper";
import About from "../components/About";
import Roadmap from "../components/Roadmap";
import FAQ from "../components/FAQ";
import Team from "../components/Team";

const HomePage = () => {
  return (
    <>
      <main id="page-wrap">
        <Preview />
        <Wrapper>
          <About />
        </Wrapper>
        <Wrapper>
          <Roadmap />
        </Wrapper>
        <Wrapper>
          <FAQ />
        </Wrapper>
        <Wrapper>
          <Team />
        </Wrapper>
      </main>
    </>
  );
};

export default HomePage;
