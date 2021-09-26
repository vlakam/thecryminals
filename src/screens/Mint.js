import classes from "./Mint.module.css";
import mintWrapper from "../assets/mintWrapper2.png";
import mintWrapperOpt from "../assets/mintWrapper2.webp";
import { useEffect, useState } from "react";
import gif from "../assets/gif.webm";
import { useStore } from "effector-react";
import { $contractSaleActive, $supply, giftFx, mintFx } from "../stores/web3";

const calculateTimeLeft = (targetDate) => {
  const difference = +targetDate - +new Date();
  const padNumber = (num) => num.toString().padStart(2, "0");

  if (difference > 0) {
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((difference / 1000 / 60) % 60);
    let seconds = Math.floor((difference / 1000) % 60);

    return `${padNumber(days)}d:${padNumber(hours)}h:${padNumber(
      minutes
    )}m:${padNumber(seconds)}s`;
  }

  return "Starting soon";
};

const Mint = () => {
  const targetDate = new Date("2021-09-29T22:59:59.000Z");
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));
  const supply = useStore($supply);
  const isSaleAcitve = useStore($contractSaleActive);
  const isMintPending = useStore(mintFx.pending);
  const isGiftPending = useStore(giftFx.pending);
  const [counter, setCounter] = useState(1);

  const mint = () => {
    mintFx(counter);
  };

  const gift = () => {
    giftFx();
  };

  const incrementHandler = () => {
    setCounter(Math.min(15, counter + 1));
  };

  const decrementHandler = () => {
    setCounter(Math.max(1, counter - 1));
  };

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);
  }, [timeLeft]);

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
            {isSaleAcitve === 0 && (<div className={classes.timer}>{timeLeft}</div>)}
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
            <div className={classes.btnGroup}>
              <button
                className={classes.mintButton}
                onClick={gift}
                disabled={isSaleAcitve === 0 || isGiftPending}
              >
                CLAIM
              </button>
              <button
                className={classes.mintButton}
                onClick={mint}
                disabled={isSaleAcitve === 0 || isMintPending}
              >
                MINT
              </button>
            </div>
          </div>
          <div className={classes.right}>
            <video loop muted autoPlay playsInline>
              <source src={gif} type="video/webm" />
            </video>
            <div>
              <p className={classes.desc}>MAX LIMIT PER TRANSACTION: 15</p>
              <p className={classes.desc}>PRICE: 0.05 ETH</p>
              <p className={classes.desc}>
                MINTED: {supply.total}/{supply.max}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Mint;
