import classes from "./Mint.module.css";
import mintWrapper from "../assets/mintWrapper2.png";
import mintWrapperOpt from "../assets/mintWrapper2.webp";
import { useEffect, useState } from "react";
import gif from "../assets/gif.webm";
import { useStore } from "effector-react";
import {
  $contractSaleActive,
  $maxClaimable,
  $maxMintable,
  $supply,
  giftFx,
  mintFx,
  getSupplyFx,
} from "../stores/web3";
import Timer from "../components/Timer.js";

const Mint = () => {
  const targetDate = new Date("2021-10-25T19:59:59.000Z");
  const [timeLeft, setTimeLeft] = useState(Timer(targetDate));
  const supply = useStore($supply);
  const isSaleAcitve = useStore($contractSaleActive);
  const maxClaimable = useStore($maxClaimable);
  const maxMintable = useStore($maxMintable);
  const isMintPending = useStore(mintFx.pending);
  const isGiftPending = useStore(giftFx.pending);
  const [mintAmount, setMintAmount] = useState(10);
  const [claimAmount, setClaimAmount] = useState(1);

  const mint = () => {
    mintFx(mintAmount);
  };

  const gift = () => {
    giftFx(claimAmount);
  };

  const mintAmountHandler = (event) => {
    setMintAmount(event.target.value);
  };

  const claimAmountHandler = (event) => {
    setClaimAmount(event.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(Timer(targetDate));
    }, 1000);
  }, [timeLeft]);

  useEffect(() => {
    getSupplyFx();
  }, []);

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
            {!isSaleAcitve && <div className={classes.timer}>{timeLeft}</div>}
            <h3>AMOUNT OF CRYMINALS</h3>
            <div className={classes.counterbox}>
              <div className={classes.mintBtnGrp}>
                <div>
                  <input
                    type="range"
                    min="1"
                    max={maxMintable}
                    step="1"
                    value={mintAmount}
                    onChange={mintAmountHandler}
                  />
                  <span>{mintAmount}</span>
                </div>
                <button
                  className={classes.mintButton}
                  onClick={mint}
                  disabled={!isSaleAcitve || isMintPending}
                >
                  MINT
                </button>
              </div>
              {maxClaimable > 0 && (
                <div
                  className={`${classes.mintBtnGrp} ${
                    maxClaimable === 0 ? classes.mintBtnGrpDisabled : ""
                  }`}
                >
                  {maxClaimable > 1 && (
                    <div>
                      <input
                        type="range"
                        min="1"
                        max={maxClaimable}
                        step="1"
                        value={claimAmount}
                        onChange={claimAmountHandler}
                      />
                      <span>{claimAmount}</span>
                    </div>
                  )}
                  <button
                    className={classes.mintButton}
                    onClick={gift}
                    disabled={!isSaleAcitve || isGiftPending}
                  >
                    GIFT
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className={classes.right}>
            <video loop muted autoPlay playsInline>
              <source src={gif} type="video/webm" />
            </video>
            <div>
              <p className={classes.desc}>MAX LIMIT PER TRANSACTION: 50</p>
              <p className={classes.desc}>PRICE: 0.025 ETH</p>
              {supply.total !== 0 && (
                <p className={classes.desc}>
                  MINTED: {supply.total}/{supply.max}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Mint;
