import classes from "./Mint.module.css";
import mintWrapper from "../assets/mintWrapper.png";
import { useState } from "react";
import gif from "../assets/gif.gif";

const Mint = () => {
  const [counter, setCounter] = useState(1);
  const incrementHandler = () => {
    if (counter >= 20) {
      setCounter(20);
    } else {
      setCounter(counter + 1);
    }
  };
  const decrementHandler = () => {
    if (counter <= 1) {
      setCounter(1);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <main>
      <div className={classes.wrapper}>
        <img src={mintWrapper} className={classes.img} />
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

            <a href="#" className={classes.mintButton}>
              MINT
            </a>
          </div>
          <div className={classes.right}>
            <img src={gif} />
            <div>
              <p className={classes.desc}>MAX LIMIT PER TRANSACTION: 20</p>
              <p className={classes.desc}>PRICE: 0.05 ETH</p>
              <p className={classes.desc}>MINTED: 100/10000</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Mint;
