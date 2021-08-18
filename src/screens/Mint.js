import classes from "./Mint.module.css";
import Preview from "../components/Preview";
import { useState } from "react";

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
    <div className={classes.wrapper}>
      <div className={classes.content}>
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
                fill-rule="evenodd"
                clip-rule="evenodd"
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
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6 48L-1.38281e-06 42L18 24L1.76441e-06 6.00001L6 5.53125e-06L30 24L6 48Z"
                fill="black"
              />
            </svg>
          </span>
        </div>
        <p className={classes.desc}>MAX LIMIT PER TRANSACTION: 20 CRYMINALS</p>
        <a href="#">MINT</a>
      </div>
    </div>
  );
};

export default Mint;
