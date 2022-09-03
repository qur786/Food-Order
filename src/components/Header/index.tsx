import { Fragment } from "react";
import { CartButton } from "../CartButton";
import classes from "./index.module.css";
import mealsImg from "../../assets/meals.jpg";

export function Header() {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals</h1>
        <CartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="A table of delicious foods" />
      </div>
    </Fragment>
  );
}
