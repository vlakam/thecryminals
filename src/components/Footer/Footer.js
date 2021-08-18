import classes from "./Footer.module.css";
import logo from "../../assets/Cryminals.svg";

// import HeaderNav from './HeaderNav';
import Socials from "../Socials";

const Footer = (params) => {
  return (
    <>
      <footer className={params.mint ? classes.mint : null}>
        {!params.mint && <img src={logo} />}

        <p className={classes.rights}>
          ALL RIGHTS RESERVED
          <br />
          2021
        </p>
        {!params.mint && <Socials />}
      </footer>
    </>
  );
};

export default Footer;
