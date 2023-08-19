import { Fragment } from "react";

import baksoImage from "../../assets/bakso.jpg";
import classes from "../Layout/Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Bakso Syifa</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header> 
      <div className={classes['main-image']}>
        <img src={baksoImage} alt="bakso and mie ayam" />
      </div>
    </Fragment>
  );
};

export default Header;
