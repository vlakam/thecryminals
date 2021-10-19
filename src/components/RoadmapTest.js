// import road1 from "../assets/road1new.png";
// import road2 from "../assets/road2new.png";
// import road3 from "../assets/road3new.png";
// import road4 from "../assets/road4new.png";
// import road5 from "../assets/road5new.png";
// import road6 from "../assets/road6new.png";
// import road7 from "../assets/road7new.png";
// import road8 from "../assets/road8new.png";
// import road9 from "../assets/road9new.png";
// import road10 from "../assets/road10new.png";
// import road1Opt from "../assets/road1new.webp";
// import road2Opt from "../assets/road2new.webp";
// import road3Opt from "../assets/road3new.webp";
// import road4Opt from "../assets/road4new.webp";
// import road5Opt from "../assets/road5new.webp";
// import road6Opt from "../assets/road6new.webp";
// import road7Opt from "../assets/road7new.webp";
// import road8Opt from "../assets/road8new.webp";
// import road9Opt from "../assets/road9new.webp";
// import road10Opt from "../assets/road10new.webp";
// import roadShare from "../assets/roadSharenew.png";
// import roadShareOpt from "../assets/roadSharenew.webp";
import road1 from "../assets/roadmap1-min.png";
import road2 from "../assets/roadmap2-min.png";
import road3 from "../assets/roadmap3-min.png";
import road4 from "../assets/roadmap4-min.png";
import road5 from "../assets/roaddev1-min.png";
import road6 from "../assets/roaddev2-min.png";
import road7 from "../assets/roaddev3-min.png";
import road8 from "../assets/roaddev4-min.png";
import road1Opt from "../assets/roadmap1-min.webp";
import road2Opt from "../assets/roadmap2-min.webp";
import road3Opt from "../assets/roadmap3-min.webp";
import road4Opt from "../assets/roadmap4-min.webp";
import road5Opt from "../assets/roaddev1-min.webp";
import road6Opt from "../assets/roaddev2-min.webp";
import road7Opt from "../assets/roaddev3-min.webp";
import road8Opt from "../assets/roaddev4-min.webp";

import classes from "./Roadmap.module.css";
import Chain from "./UI/Chain";
import ProgressBar from "./ProgressBar";

import { useEffect, useState } from "react";
import { $contractSaleActive, $supply, giftFx, mintFx } from "../stores/web3";
import { useStore } from "effector-react";

const Roadmap = () => {
  const supply = useStore($supply);
  // const supply = { total: 1473 };
  const testData = [
    {
      text: "Heist #1\n5 random NFTs",
      bgcolor: (supply.total / 1000) * 100 >= 100 ? "#00FF29" : "#ffa800",
      completed:
        (supply.total / 1000) * 100 >= 100
          ? 100
          : ((supply.total / 1000) * 100).toFixed(2),
      max:
        (supply.total / 1000) * 100 >= 100
          ? "Completed"
          : `${supply.total}/1000`,
      maxColor: (supply.total / 1000) * 100 >= 100 ? "#00FF29" : "#fff",
    },
    {
      text: "Heist #2\n0N1 Force NFT",
      bgcolor: (supply.total / 2000) * 100 >= 100 ? "#00FF29" : "#ffa800",
      completed:
        (supply.total / 2000) * 100 >= 100
          ? 100
          : ((supply.total / 2000) * 100).toFixed(2),
      max:
        (supply.total / 2000) * 100 >= 100
          ? "Completed"
          : `${supply.total}/2000`,
      maxColor: (supply.total / 2000) * 100 >= 100 ? "#00FF29" : "#fff",
    },
    {
      text: "Heist #3\nFVCK_CRYSTAL// NFT",
      bgcolor: (supply.total / 3000) * 100 >= 100 ? "#00FF29" : "#ffa800",
      completed:
        (supply.total / 3000) * 100 >= 100
          ? 100
          : ((supply.total / 3000) * 100).toFixed(2),
      max:
        (supply.total / 3000) * 100 >= 100
          ? "Completed"
          : `${supply.total}/3000`,
      maxColor: (supply.total / 3000) * 100 >= 100 ? "#00FF29" : "#fff",
    },
    {
      text: "Heist #4\nPudgy Penguins NFT",
      bgcolor: (supply.total / 4000) * 100 >= 100 ? "#00FF29" : "#ffa800",
      completed:
        (supply.total / 4000) * 100 >= 100
          ? 100
          : ((supply.total / 4000) * 100).toFixed(2),
      max:
        (supply.total / 4000) * 100 >= 100
          ? "Completed"
          : `${supply.total}/4000`,
      maxColor: (supply.total / 4000) * 100 >= 100 ? "#00FF29" : "#fff",
    },
    {
      text: "Heist #5\nBAKC NFT",
      bgcolor: (supply.total / 5000) * 100 >= 100 ? "#00FF29" : "#ffa800",
      completed:
        (supply.total / 5000) * 100 >= 100
          ? 100
          : ((supply.total / 5000) * 100).toFixed(2),
      max:
        (supply.total / 5000) * 100 >= 100
          ? "Completed"
          : `${supply.total}/5000`,
      maxColor: (supply.total / 5000) * 100 >= 100 ? "#00FF29" : "#fff",
    },
    {
      text: "Heist #6\nCool Cats NFT",
      bgcolor: (supply.total / 6000) * 100 >= 100 ? "#00FF29" : "#ffa800",
      completed:
        (supply.total / 6000) * 100 >= 100
          ? 100
          : ((supply.total / 6000) * 100).toFixed(2),
      max:
        (supply.total / 6000) * 100 >= 100
          ? "Completed"
          : `${supply.total}/6000`,
      maxColor: (supply.total / 6000) * 100 >= 100 ? "#00FF29" : "#fff",
    },
    {
      text: "Heist #7\nMAYC NFT",
      bgcolor: (supply.total / 7000) * 100 >= 100 ? "#00FF29" : "#ffa800",
      completed:
        (supply.total / 7000) * 100 >= 100
          ? 100
          : ((supply.total / 7000) * 100).toFixed(2),
      max:
        (supply.total / 7000) * 100 >= 100
          ? "Completed"
          : `${supply.total}/7000`,
      maxColor: (supply.total / 7000) * 100 >= 100 ? "#00FF29" : "#fff",
    },
    {
      text: "Heist #8\nMeebits NFT",
      bgcolor: (supply.total / 8000) * 100 >= 100 ? "#00FF29" : "#ffa800",
      completed:
        (supply.total / 8000) * 100 >= 100
          ? 100
          : ((supply.total / 8000) * 100).toFixed(2),
      max:
        (supply.total / 8000) * 100 >= 100
          ? "Completed"
          : `${supply.total}/8000`,
      maxColor: (supply.total / 8000) * 100 >= 100 ? "#00FF29" : "#fff",
    },
    {
      text: "Heist #9\nGutter Cats NFT",
      bgcolor: (supply.total / 9000) * 100 >= 100 ? "#00FF29" : "#ffa800",
      completed:
        (supply.total / 9000) * 100 >= 100
          ? 100
          : ((supply.total / 9000) * 100).toFixed(2),
      max:
        (supply.total / 9000) * 100 >= 100
          ? "Completed"
          : `${supply.total}/9000`,
      maxColor: (supply.total / 9000) * 100 >= 100 ? "#00FF29" : "#fff",
    },
    {
      text: "Heist #10\nBAYC NFT",
      bgcolor: (supply.total / 10000) * 100 >= 100 ? "#00FF29" : "#ffa800",
      completed:
        (supply.total / 10000) * 100 >= 100
          ? 100
          : ((supply.total / 10000) * 100).toFixed(2),
      max:
        (supply.total / 10000) * 100 >= 100
          ? "Completed"
          : `${supply.total}/10000`,
      maxColor: (supply.total / 10000) * 100 >= 100 ? "#00FF29" : "#fff",
    },
  ];
  return (
    <section id="roadmap">
      <h2>AVAILABLE LOOT TO BE SHARED</h2>
      <div className={classes.roadmapBox}>
        <div className={classes.roadmapBoxItem}>
          <picture>
            <source srcSet={road1Opt} type="image/webp" />
            <source srcSet={road1} type="image/png" />
            <img src={road1} alt="road1" />
          </picture>
          <p>
            The epic heist series will start with a{" "}
            <span className={classes.accent}>$25000 giveaway</span> as we get to
            30%!
          </p>
        </div>
        <div className={classes.roadmapBoxItem}>
          <picture>
            <source srcSet={road2Opt} type="image/webp" />
            <source srcSet={road2} type="image/png" />
            <img src={road2} alt="road2" />
          </picture>
          <p>
            A brand new <span className={classes.accent}>Tesla Model S</span>{" "}
            will be a 50% milestone of the reckless invasion!
          </p>
        </div>
        <div className={classes.roadmapBoxItem}>
          <picture>
            <source srcSet={road3Opt} type="image/webp" />
            <source srcSet={road3} type="image/png" />
            <img src={road3} alt="road3" />
          </picture>
          <p>
            After 75% is sold, a lucky holder will be rewarded with an artwork
            of the great and powerful{" "}
            <span className={classes.accent}>Banksy</span>!
          </p>
        </div>
        <div className={classes.roadmapBoxItem}>
          <picture>
            <source srcSet={road4Opt} type="image/webp" />
            <source srcSet={road4} type="image/png" />
            <img src={road4} alt="road4" />
          </picture>
          <p>
            And finally - at 100% - we will make a 15 ETH donation to{" "}
            <span className={classes.accent}>Crime Victims Fund</span>!
          </p>
        </div>
      </div>
      <h2>POST-SALE ACTIVITIES</h2>
      <div className={classes.roadmapBox}>
        <div className={classes.roadmapBoxItem}>
          <picture>
            <source srcSet={road7Opt} type="image/webp" />
            <source srcSet={road7} type="image/png" />
            <img src={road7} alt="road6" />
          </picture>
          <p>
            <span className={classes.accent}>Q4 2021</span>
            <br />
            <br /> We release the $HEIST token and list it on major crypto
            decentralized exchanges!
            <br />
            <br /> Every holder will be able to stake their NFTs from both The
            Cryminals generations!
          </p>
        </div>
        <div className={classes.roadmapBoxItem}>
          <picture>
            <source srcSet={road5Opt} type="image/webp" />
            <source srcSet={road5} type="image/png" />
            <img src={road5} alt="road5" />
          </picture>
          <p>
            <span className={classes.accent}>Q4 2021</span>
            <br />
            <br /> Start of a play-to-earn game development.
            <br />
            <br /> Get ready for the new characters and a brand new experience
            in the expanded multiverse!
          </p>
        </div>
        <div className={classes.roadmapBoxItem}>
          <picture>
            <source srcSet={road6Opt} type="image/webp" />
            <source srcSet={road6} type="image/png" />
            <img src={road6} alt="road6" />
          </picture>
          <p>
            <span className={classes.accent}>Q1 2022</span>
            <br />
            <br /> Launch of The Cryminals 3D collection.
            <br />
            <br /> All the current holders will be whitelisted for a cheaper
            mint!
          </p>
        </div>
        <div className={classes.roadmapBoxItem}>
          <picture>
            <source srcSet={road8Opt} type="image/webp" />
            <source srcSet={road8} type="image/png" />
            <img src={road8} alt="road6" />
          </picture>
          <p>
            <span className={classes.accent}>Q2 2022</span>
            <br />
            <br /> The first survival play-to-earn Heist Games will be launched
            on Flow blockchain!
          </p>
        </div>
      </div>
      {/* <div className={classes.mainPic}>
        <picture>
          <source srcSet={road10Opt} type="image/webp" />
          <source srcSet={road10} type="image/png" />
          <img src={road10} alt="road10" />
        </picture>
        <p>
          The final mission and the wildest theft ever committed as a 10k Gang -
          a Bored Ape Yacht Club NFT!
        </p>
      </div> */}
      {/* <h2>HEISTS IN PROGRESS</h2>
      <div className={classes.heists}>
        {testData.map((item, idx) => (
          <ProgressBar
            key={idx}
            bgcolor={item.bgcolor}
            completed={item.completed}
            text={item.text}
            max={item.max}
            maxColor={item.maxColor}
          />
        ))}
      </div> */}
      {/* <h2>
        NOW THE LOOT IS SHARED...
        <br /> WHAT’S NEXT?
      </h2>
      <div className={classes.post}>
        <p>
          Do you really think we’re gonna stop there? There is still A LOT of
          things prepared for you!
        </p>
        <ul>
          <li>
            - <span>MORE LOOT SHARING</span> will be conducted regularly in The
            Gang!
          </li>
          <li>
            - Exclusive <span>merchandise store</span> will be launched. Be
            ready for multiple merch giveaways for Cryminals owners!
          </li>
          <li>
            - An original <span>NFT comic book</span>, where The Cryminals'
            backstory is revealed, will be airdropped to The Cryminals holders!
          </li>
          <li>
            - We start to develop a <span>video game with secret prizes</span>{" "}
            based on our story straight away!
          </li>
          <li>
            - As we recruit new gangsters, a <span>public voting</span> will be
            conducted to decide the future missions and adventures of The Gang!
          </li>
        </ul>
        <small>
          * The Cryminals are not affiliated with above-mentioned collections.
          <br />
          All images are used for information purposes only.
          <br />
          Please note: actual loot may be a different mint from the one shown.
        </small>
      </div> */}
      <Chain />
    </section>
  );
};

export default Roadmap;
