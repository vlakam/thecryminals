import PreviewTest from "../components/PreviewTest";
import Wrapper from "../components/UI/Wrapper";
import About from "../components/About";
import RoadmapTest from "../components/RoadmapTest";
import FAQ from "../components/FAQ";
import Team from "../components/Team";

const Test = () => {
  return (
    <>
      <main id="page-wrap">
        <PreviewTest />
        <Wrapper>
          <About />
        </Wrapper>
        <Wrapper>
          <RoadmapTest />
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

export default Test;
