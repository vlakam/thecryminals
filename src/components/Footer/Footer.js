import classes from "./Footer.module.css";
import logo from "../../assets/Cryminals.png";

// import HeaderNav from './HeaderNav';
import Socials from "../Socials";

const Footer = (params) => {
  return (
    <>
      <footer className={params.mint ? classes.mint : null}>
        {!params.mint && <img src={logo} />}
        {!params.mint && (
          <p className={classes.rights}>
            ALL RIGHTS RESERVED
            <br />
            2021
          </p>
        )}

        <Socials />
      </footer>
    </>
  );
};

export default Footer;
