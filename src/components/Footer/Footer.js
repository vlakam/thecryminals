import classes from "./Footer.module.css";
import logo from "../../assets/Cryminals.png";

// import HeaderNav from './HeaderNav';
import Socials from "../Socials";

const Footer = (params) => {
  return (
    <>
      <footer className={params.mint ? classes.mint : null}>
        <div>
          {!params.mint && <img src={logo} />}
          {!params.mint && (
            <p className={classes.rights}>
              ALL RIGHTS RESERVED
              <br />
              2021
            </p>
          )}

          <Socials />
        </div>
        {/* <p className={classes.contract}>
          Verified OpenSea contract:{" "}
          <a href="https://etherscan.io/address/0x17668c2718d498dd95693d384e70aea184c6325c">
            0x17668c2718d498dd95693d384e70aea184c6325c
          </a>
        </p> */}
      </footer>
    </>
  );
};

export default Footer;
