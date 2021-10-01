import road1 from "../assets/road1.png";
import road2 from "../assets/road2.png";
import road3 from "../assets/road3.png";
import road4 from "../assets/road4.png";
import road5 from "../assets/road5.png";
import road6 from "../assets/road6.png";
import road7 from "../assets/road7.png";
import road8 from "../assets/road8.png";
import road9 from "../assets/road9.png";
import road10 from "../assets/road10.png";
import road1Opt from "../assets/road1.webp";
import road2Opt from "../assets/road2.webp";
import road3Opt from "../assets/road3.webp";
import road4Opt from "../assets/road4.webp";
import road5Opt from "../assets/road5.webp";
import road6Opt from "../assets/road6.webp";
import road7Opt from "../assets/road7.webp";
import road8Opt from "../assets/road8.webp";
import road9Opt from "../assets/road9.webp";
import road10Opt from "../assets/road10.webp";
import roadShare from "../assets/roadShare.png";
import roadShareOpt from "../assets/roadShare.webp";
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
      <p>
        Pre-sale activities include tons of giveaways on our Twitter and
        Discord, including art and meme contests. All winners will receive free
        Cryminals one day before the official launch, which is set on September
        21st.
        <br />
        <br />
        Once minted a Cryminal, you become the member of The Gang and your funds
        will be transferred to our Cryme Pool. It will be used for our
        villainous and noble mission at the same time - bringing art back to
        people!
        <br />
        <br />
        Every 500 mints will be celebrated with $1000 giveaway, but much bigger
        loot will be shared every 1000 mints! Let’s find out together what every
        Cryminal has a chance to get!
      </p>
      <div className={classes.roadmapBox}>
        <div className={classes.roadmapBoxItem}>
          <picture>
            <source srcSet={road1Opt} type="image/webp" />
            <source srcSet={road1} type="image/png" />
            <img src={road1} alt="road1" />
          </picture>
          <p>
            We will celebrate our first 1000 gangsters by giving away 5 random
            trendy and valuable pieces of NFT art!
          </p>
        </div>
        <div className={classes.roadmapBoxItem}>
          <picture>
            <source srcSet={roadShareOpt} type="image/webp" />
            <source srcSet={roadShare} type="image/png" />
            <img src={roadShare} alt="roadShare" />
          </picture>
          <p>1500 mints - $1000 shared!</p>
        </div>
        <div className={classes.roadmapBoxItem}>
          <picture>
            <source srcSet={road2Opt} type="image/webp" />
            <source srcSet={road2} type="image/png" />
            <img src={road2} alt="road2" />
          </picture>
          <p>
            As soon as our Gang hits 2000 members, we give away an 0N1 Force
            NFT!
          </p>
        </div>
        <div className={classes.roadmapBoxItem}>
          <picture>
            <source srcSet={roadShareOpt} type="image/webp" />
            <source srcSet={roadShare} type="image/png" />
            <img src={roadShare} alt="roadShare" />
          </picture>
          <p>2500 mints - $1000 shared!</p>
        </div>
        <div className={classes.roadmapBoxItem}>
          <picture>
            <source srcSet={road3Opt} type="image/webp" />
            <source srcSet={road3} type="image/png" />
            <img src={road3} alt="road3" />
          </picture>
          <p>3000 Cryminals on board? Here is a FVCK_CRYSTAL// NFT!</p>
        </div>
        <div className={classes.roadmapBoxItem}>
          <picture>
            <source srcSet={roadShareOpt} type="image/webp" />
            <source srcSet={roadShare} type="image/png" />
            <img src={roadShare} alt="roadShare" />
          </picture>
          <p>3500 mints - $1000 shared!</p>
        </div>
        <div className={classes.roadmapBoxItem}>
          <picture>
            <source srcSet={road4Opt} type="image/webp" />
            <source srcSet={road4} type="image/png" />
            <img src={road4} alt="road4" />
          </picture>
          <p>
            We will also have a cute Pudgy Penguin NFT for you
            <br /> as we get to 4000!
          </p>
        </div>
        <div className={classes.roadmapBoxItem}>
          <picture>
            <source srcSet={roadShareOpt} type="image/webp" />
            <source srcSet={roadShare} type="image/png" />
            <img src={roadShare} alt="roadShare" />
          </picture>
          <p>4500 mints - $1000 shared!</p>
        </div>
        <div className={classes.roadmapBoxItem}>
          <picture>
            <source srcSet={road5Opt} type="image/webp" />
            <source srcSet={road5} type="image/png" />
            <img src={road5} alt="road5" />
          </picture>
          <p>5000 milestone will get you a Bored Ape Kennel Club NFT!</p>
        </div>
        <div className={classes.roadmapBoxItem}>
          <picture>
            <source srcSet={roadShareOpt} type="image/webp" />
            <source srcSet={roadShare} type="image/png" />
            <img src={roadShare} alt="roadShare" />
          </picture>
          <p>5500 mints - $1000 shared!</p>
        </div>
        <div className={classes.roadmapBoxItem}>
          <picture>
            <source srcSet={road6Opt} type="image/webp" />
            <source srcSet={road6} type="image/png" />
            <img src={road6} alt="road6" />
          </picture>
          <p>A Cool Cat NFT will be secretly adopted as we get 6000 members!</p>
        </div>
        <div className={classes.roadmapBoxItem}>
          <picture>
            <source srcSet={roadShareOpt} type="image/webp" />
            <source srcSet={roadShare} type="image/png" />
            <img src={roadShare} alt="roadShare" />
          </picture>
          <p>6500 mints - $1000 shared!</p>
        </div>
        <div className={classes.roadmapBoxItem}>
          <picture>
            <source srcSet={road7Opt} type="image/webp" />
            <source srcSet={road7} type="image/png" />
            <img src={road7} alt="road7" />
          </picture>
          <p>
            7000 gangsters will sneak into the Mutant Ape Yacht Club and get an
            NFT!
          </p>
        </div>
        <div className={classes.roadmapBoxItem}>
          <picture>
            <source srcSet={roadShareOpt} type="image/webp" />
            <source srcSet={roadShare} type="image/png" />
            <img src={roadShare} alt="roadShare" />
          </picture>
          <p>7500 mints - $1000 shared!</p>
        </div>
        <div className={classes.roadmapBoxItem}>
          <picture>
            <source srcSet={road8Opt} type="image/webp" />
            <source srcSet={road8} type="image/png" />
            <img src={road8} alt="road8" />
          </picture>
          <p>
            A Meebit NFT is our reward for bringing together 8000 partners in
            crime!
          </p>
        </div>
        <div className={classes.roadmapBoxItem}>
          <picture>
            <source srcSet={roadShareOpt} type="image/webp" />
            <source srcSet={roadShare} type="image/png" />
            <img src={roadShare} alt="roadShare" />
          </picture>
          <p>8500 mints - $1000 shared!</p>
        </div>
        <div className={classes.roadmapBoxItem}>
          <picture>
            <source srcSet={road9Opt} type="image/webp" />
            <source srcSet={road9} type="image/png" />
            <img src={road9} alt="road9" />
          </picture>
          <p>9000 members will pave the way to a Gutter Cat Gang NFT!</p>
        </div>
        <div className={classes.roadmapBoxItem}>
          <picture>
            <source srcSet={roadShareOpt} type="image/webp" />
            <source srcSet={roadShare} type="image/png" />
            <img src={roadShare} alt="roadShare" />
          </picture>
          <p>9500 mints - $1000 shared!</p>
        </div>
      </div>
      <div className={classes.mainPic}>
        <picture>
          <source srcSet={road10Opt} type="image/webp" />
          <source srcSet={road10} type="image/png" />
          <img src={road10} alt="road10" />
        </picture>
        <p>
          The final mission and the wildest theft ever committed as a 10k Gang -
          a Bored Ape Yacht Club NFT!
        </p>
      </div>
      <h2>HEISTS IN PROGRESS</h2>
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
      </div>
      <h2>
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
      </div>
      <Chain />
    </section>
  );
};

export default Roadmap;
