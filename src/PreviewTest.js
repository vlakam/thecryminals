import { useState } from "react";
import { Link } from "react-router-dom";

import classes from "./Preview.module.css";
import logo from "../assets/logo.png";
import wrapper from "../assets/w.webp";

const Preview = () => {
  const [isComming, setIsComming] = useState(true);
  return (
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
  );
};

export default Preview;
