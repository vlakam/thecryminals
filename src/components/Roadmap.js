import roadmap from "../assets/pick.png";
import classes from "./Roadmap.module.css";
import Chain from "./UI/Chain";

const Roadmap = () => {
  return (
    <section id="roadmap">
      <h2>ROADMAP</h2>
      <div className={classes.roadmapBox}>
        <div className={classes.roadmapBoxItem}>
          <img src={roadmap} />
          <p>Launch of the collection on September 1st!</p>
        </div>
        <div className={classes.roadmapBoxItem}>
          <img src={roadmap} />
          <p>
            Exclusive merchandise store is going live! Random holders will
            receive some dope pieces of our merch!
          </p>
        </div>
        <div className={classes.roadmapBoxItem}>
          <img src={roadmap} />
          <p>
            The Cryminals wanna have some fun too! We will start the meme
            contest with lots of cool prizes!
          </p>
        </div>
        <div className={classes.roadmapBoxItem}>
          <img src={roadmap} />
          <p>
            All holders will be airdropped an original NFT comic book where the
            backstory of The Cryminals is revealed!
          </p>
        </div>
        <div className={classes.roadmapBoxItem}>
          <img src={roadmap} />
          <p>
            New characters and plot twists join The Cryminals metaverse! After
            soldout we will start working on the new collection straight away!
          </p>
        </div>
        <div className={classes.roadmapBoxItem}>
          <img src={roadmap} />
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
