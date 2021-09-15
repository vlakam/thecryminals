import classes from "./About.module.css";
import gif from "../assets/gif.gif";
import Chain from "./UI/Chain";

import extra1 from "../assets/extra1.png";
import extra2 from "../assets/extra2.png";
import extra3 from "../assets/extra3.png";
import extra4 from "../assets/extra4.png";
import extra5 from "../assets/extra5.png";

const About = () => {
  return (
    <section id="about">
      <h1>Welcome to the gang!</h1>
      <div className={classes.gifbox}>
        <p>
          Art is not for everybody? Art = commerce? Art is life? How far would
          YOU go to become a part of it?
          <br />
          <br />
          Our main hero, Spike, has become the superior criminal among two most
          dangerous gangs of Metacity - Nomads and Gangsters! But,
          unfortunately, there are so few heroes like him...
          <br />
          Therefore we need YOUR help!
          <br />
          <br />
          Look, it’s simple as that - you cooperate with us, and we reward you
          with valuable and unique pieces of art!
          <br />
          <br />
          LET'S MAKE ART A COMMON HERITAGE AGAIN!
          <br />
          <br />
          Are you ready to join The Gang? Then keep your weapons up! The
          Cryminals are coming...
        </p>
        <img src={gif} />
      </div>
      <h2 className={classes.title}>HOW DO WE SHARE THE LOOT?</h2>
      <ol>
        <li>
          Owning just 1 Cryminal entitles you to your share of these NFTs!
        </li>
        <li>
          Every single Cryminal has a chance to obtain the stolen cash and
          goods!
        </li>
        <li>
          Owning more Cryminals increases your odds to split the Cryme Pool!
        </li>
        <li>
          We input all minted token IDs into randomizer and find out our lucky
          partners in crime, who share the plunder!
        </li>
      </ol>

      <h2 className={classes.title}>THE EXTRAS</h2>
      <p>
        The collection will also include few ultrarare characters! Here is a
        little hint to let you imagine how they will look like :)
      </p>
      <div className={classes.extras}>
        <img src={extra1} />
        <img src={extra2} />
        <img src={extra3} />
        <img src={extra4} />
        <img src={extra5} />
      </div>
      <Chain />
    </section>
  );
};

export default About;
