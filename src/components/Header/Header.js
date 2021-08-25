import classes from "./Header.module.css";
import logo from "../../assets/Cryminals.svg";

import HeaderNav from "./HeaderNav";
import Socials from "../Socials";
import Wrapper from "../UI/Wrapper";

import { Link } from "react-router-dom";

import { slide as Menu } from "react-burger-menu";

const Header = (params) => {
  return (
    <>
      <header>
        <div className={classes.headwrap}>
          <Link to="/">
            <img src={logo} />
          </Link>
          {!params.mint && <HeaderNav />}
          {params.mint && (
            <button className={classes.connect}>connect wallet</button>
          )}
          {!params.mint && <Socials />}
        </div>
      </header>
      <Menu right pageWrapId={"page-wrap"}>
        <Socials />
        <Link to="/mint">
          <span>to Mint</span>
        </Link>
        {params.mint && (
          <button className={classes.connect}>connect wallet</button>
        )}
      </Menu>
    </>
  );
};

export default Header;
