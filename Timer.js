const Timer = (targetDate) => {
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

export default Timer;
