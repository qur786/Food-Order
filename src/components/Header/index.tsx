import { Fragment, HTMLProps } from "react";
import { CartButton } from "../CartButton";
import classes from "./index.module.css";
import mealsImg from "../../assets/meals.jpg";

interface HeaderProps {
  onShowCart: HTMLProps<HTMLButtonElement>["onClick"];
}

export function Header({ onShowCart }: HeaderProps) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals</h1>
        <CartButton onClick={onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="A table of delicious foods" />
      </div>
    </Fragment>
  );
}
