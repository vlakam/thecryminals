import { useState } from "react";
import { Link } from "react-router-dom";
import Chain from "../components/UI/Chain";
import classes from "./Preview.module.css";
import logo from "../assets/logo.png";
import wrapper from "../assets/w.webp";

import Wrapper from "../components/UI/Wrapper";

const Preview = () => {
  const [isComming, setIsComming] = useState(true);
  return (
    <>
      <div
        className={classes.wrapperImg}
        style={{ backgroundImage: `url(${wrapper})` }}
      >
        <div className={classes.content}>
          {/* <img src={logo} /> */}
          {!isComming && <Link to="/mint">MINT YOUR CRYMINAL</Link>}
          {/* {isComming && <span className={classes.comming}>COMING SOON</span>} */}
        </div>
      </div>
      <Wrapper>
        {/* <h2 className={classes.openTitle}>
          THE CRYMINALS ARE GOING ON A HEIST!
        </h2>
        <p className={[classes.open, classes.open1].join(" ")}>
          <span className={classes.red}>Stealing:</span> over{" "}
          <span>$250,000</span> worth of ETH and NFTs!
        </p>
        <p className={classes.open}>
          Join{" "}
          <a
            href="https://discord.gg/TheCryminalsNFT"
            target="_blank"
            className={classes.red}
          >
            The Cryminals
          </a>{" "}
          and get your share of the loot!
        </p> */}
        <Chain />
      </Wrapper>
    </>
  );
};

export default Preview;
