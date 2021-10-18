import chain from "../../assets/chain-min.png";
import chainOpt from "../../assets/chain-min.webp";
import classes from "./Chain.module.css";
const Chain = () => {
  return (
    <picture>
      <source srcSet={chainOpt} type="image/webp" />
      <source srcSet={chain} type="image/png" />
      <img src={chain} alt="chain" className={classes.chain} />
    </picture>
  );
};
export default Chain;
