import road1 from "../assets/road1(old).png";
import road2 from "../assets/road2(old).png";
import road3 from "../assets/road3(old).png";
import road4 from "../assets/road4(old).png";
import road5 from "../assets/road5(old).png";
import road6 from "../assets/road6(old).png";
import classes from "./Roadmap.module.css";
import Chain from "./UI/Chain";

const Roadmap = () => {
  return (
    <section id="roadmap">
      <h2>ROADMAP</h2>
      <div className={classes.roadmapBox}>
        <div className={classes.roadmapBoxItem}>
          <img src={road1} />
          <p>
            Launch of the collection!
            <br /> (exact date TBA)
          </p>
        </div>
        <div className={classes.roadmapBoxItem}>
          <img src={road2} />
          <p>
            Exclusive merchandise store is going live! Random holders will
            receive some dope pieces of our merch!
          </p>
        </div>
        <div className={classes.roadmapBoxItem}>
          <img src={road3} />
          <p>
            The Cryminals wanna have some fun too! We will start the meme
            contest with lots of cool prizes!
          </p>
        </div>
        <div className={classes.roadmapBoxItem}>
          <img src={road4} />
          <p>
            All holders will be airdropped an original NFT comic book where the
            backstory of The Cryminals is revealed!
          </p>
        </div>
        <div className={classes.roadmapBoxItem}>
          <img src={road5} />
          <p>
            New characters and plot twists join The Cryminals metaverse! After
            soldout we will start working on the new collection straight away!
          </p>
        </div>
        <div className={classes.roadmapBoxItem}>
          <img src={road6} />
          <p>
            And here is one secret super benefit which is saved for later...
            Stay tuned!
          </p>
        </div>
      </div>
      <Chain />
    </section>
  );
};

export default Roadmap;
