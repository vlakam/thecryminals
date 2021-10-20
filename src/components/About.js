import classes from "./About.module.css";
import gif from "../assets/gif.webm";
import Chain from "./UI/Chain";

import extra1 from "../assets/extra1.png";
import extra2 from "../assets/extra2.png";
import extra3 from "../assets/extra3.png";
import extra4 from "../assets/extra4.png";
import extra5 from "../assets/extra5.png";

import extra1Opt from "../assets/extra1.webp";
import extra2Opt from "../assets/extra2.webp";
import extra3Opt from "../assets/extra3.webp";
import extra4Opt from "../assets/extra4.webp";
import extra5Opt from "../assets/extra5.webp";

const About = () => {
  return (
    <section id="about">
      <h1>Welcome to the gang!</h1>
      <div className={classes.gifbox}>
        <p>
          <p className={classes.price}>
            October 25th - 4 PM EDT
            <br />
            <br />
            0,025 ETH EACH!
          </p>
          Metacity is never going to be the same. The Apocalypse has wiped all
          the Cryminals out of existence. The virtual streets remained
          suspiciously quiet, and there was no more chaos and violence going on.
          But it was not until the end of October - the time when humans
          celebrate the All Saints’ Day…
          <br />
          <br />
          The reckless army of bloodthirsty undead will rise up in the real
          life. These greedy bastards will take swing at some really expensive
          items and pieces of art on the Earth. And nothing is going to stop
          them…
          <br />
          <br />
          This night will go down in the history of humanity as the time when
          the real and the virtual worlds collided!
          <br />
          <br />
          The bloody revenge is coming…
        </p>
        {/* <img src={gif} /> */}
        <video loop muted autoPlay playsInline>
          <source src={gif} type="video/webm" />
        </video>
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

      {/* <h2 className={classes.title}>THE EXTRAS</h2>
      <p>
        The collection will also include few ultrarare characters! Here is a
        little hint to let you imagine how they will look like :)
      </p>
      <div className={classes.extras}>
        <picture>
          <source srcSet={extra1Opt} type="image/webp" />
          <source srcSet={extra1} type="image/png" />
          <img src={extra1} alt="extra1" />
        </picture>
        <picture>
          <source srcSet={extra2Opt} type="image/webp" />
          <source srcSet={extra2} type="image/png" />
          <img src={extra2} alt="extra2" />
        </picture>
        <picture>
          <source srcSet={extra3Opt} type="image/webp" />
          <source srcSet={extra3} type="image/png" />
          <img src={extra3} alt="extra3" />
        </picture>
        <picture>
          <source srcSet={extra4Opt} type="image/webp" />
          <source srcSet={extra4} type="image/png" />
          <img src={extra4} alt="extra4" />
        </picture>
        <picture>
          <source srcSet={extra5Opt} type="image/webp" />
          <source srcSet={extra5} type="image/png" />
          <img src={extra5} alt="extra5" />
        </picture>
      </div> */}
      <Chain />
    </section>
  );
};

export default About;
