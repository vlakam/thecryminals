import classes from "./About.module.css";
import gif from "../assets/gif.gif";
import Chain from "./UI/Chain";
const About = () => {
  return (
    <section id="about">
      <h1>Welcome to the gang</h1>
      <div className={classes.gifbox}>
        <p>
          The Cryminals is a collection of 10,000 NFTs — digital collectibles
          living on the Ethereum blockchain.
          <br />
          <br />
          Every single gangster is unique and is combined from over 400 traits -
          hairstyles, eyes, clothes, tattoos, weapons and many others!
          <br />
          <br />
          Owning a Cryminal will also give you an opportunity to become a part
          of the strong community and decide its future fate.
          <br />
          <br />
          Are you ready to join The Gang? Keep your weapons up! The Cryminals
          are coming...
        </p>
        <img src={gif} />
      </div>
      <Chain />
    </section>
  );
};

export default About;
