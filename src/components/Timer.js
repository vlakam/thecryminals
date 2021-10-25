import classes from "./Timer.module.css";
import { useEffect, useState } from "react";

const calculateTime = (targetDate) => {
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

const Timer = () => {
  const targetDate = new Date("2021-10-25T19:59:59.000Z");
  const [timeLeft, setTimeLeft] = useState(calculateTime(targetDate));
  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTime(targetDate));
    }, 1000);
  }, [timeLeft]);

  return (
    <div className={classes.timer}>{timeLeft}</div>
  );
}

export default Timer;
