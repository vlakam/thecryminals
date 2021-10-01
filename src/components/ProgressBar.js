import classes from "./ProgressBar.module.css";
const ProgressBar = (props) => {
  const { bgcolor, completed, text, max, maxColor } = props;

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <>
      <div className={classes.barbox}>
        <div className={classes.text}>
          {text}{" "}
          <div className={classes.completedUp} style={{ color: maxColor }}>
            {max}
          </div>
        </div>
        <div className={classes.containerStyles}>
          <div style={fillerStyles}>
            <span style={labelStyles}>{}</span>
          </div>
        </div>
        <div className={classes.completedDown} style={{ color: maxColor }}>
          {max}
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
