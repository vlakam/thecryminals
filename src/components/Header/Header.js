import classes from "./Header.module.css";
import logo from "../../assets/Cryminals.svg";

import HeaderNav from "./HeaderNav";
import Socials from "../Socials";

import { Link } from "react-router-dom";

const Header = (params) => {
  return (
    <>
      <header>
        <Link to="/">
          <img src={logo} />
        </Link>
        {!params.mint && <HeaderNav />}
        {params.mint && <button>connect wallet</button>}
        <Socials />
      </header>
    </>
  );
};

export default Header;
