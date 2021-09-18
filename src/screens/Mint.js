import classes from "./Mint.module.css";
import mintWrapper from "../assets/mintWrapper2.png";
import mintWrapperOpt from "../assets/mintWrapper2.webp";
import { useState } from "react";
import gif from "../assets/gif.webm";
import { useStore } from "effector-react";
import { $supply, mintFx } from "../stores/web3";

const Mint = () => {
  const supply = useStore($supply);
  const [counter, setCounter] = useState(1);
  const mint = () => {
    mintFx(counter);
  };

  const incrementHandler = () => {
    setCounter(Math.min(20, counter + 1));
  };

  const decrementHandler = () => {
    setCounter(Math.max(1, counter - 1));
  };

  return (
    <main>
      <div className={classes.wrapper}>
        <picture className={classes.img}>
          <source srcSet={mintWrapperOpt} type="image/webp" />
          <source srcSet={mintWrapper} type="image/png" />
          <img src={mintWrapper} alt="mintWrapper" />
        </picture>
        <div className={classes.content}>
          <div className={classes.left}>
            <h3>AMOUNT OF CRYMINALS</h3>
            <div className={classes.counterbox}>
              <span onClick={decrementHandler}>
                <svg
                  width="30"
                  height="48"
                  viewBox="0 0 30 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={classes.arrow}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24 0L30 6L12 24L30 42L24 48L0 24L24 0Z"
                    fill="black"
                  />
                </svg>
              </span>
              {/* <input type="number" min="1" max="20" value={counter} /> */}
              <span className={classes.counter}>{counter}</span>
              <span onClick={incrementHandler}>
                <svg
                  width="30"
                  height="48"
                  viewBox="0 0 30 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={classes.arrow}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 48L-1.38281e-06 42L18 24L1.76441e-06 6.00001L6 5.53125e-06L30 24L6 48Z"
                    fill="black"
                  />
                </svg>
              </span>
            </div>

            <a href="#" className={classes.mintButton} onClick={mint}>
              MINT
            </a>
          </div>
          <div className={classes.right}>
            <video loop muted autoPlay playsInline>
              <source src={gif} type="video/webm" />
            </video>
            <div>
              <p className={classes.desc}>MAX LIMIT PER TRANSACTION: 20</p>
              <p className={classes.desc}>PRICE: 0.05 ETH</p>
              <p className={classes.desc}>MINTED: {supply.total}/{supply.max}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Mint;
