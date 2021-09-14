import classes from "./About.module.css";
import gif from "../assets/gif.gif";
import Chain from "./UI/Chain";
const About = () => {
  return (
    <section id="about">
      <h1>Welcome to the gang</h1>
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
      <Chain />
    </section>
  );
};

export default About;
