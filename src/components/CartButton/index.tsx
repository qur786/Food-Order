import type { HTMLProps } from "react";
import { CartIcon } from "../CartIcon";
import classes from "./index.module.css";

interface CartButtonProps {
  onClick: HTMLProps<HTMLButtonElement>["onClick"];
}

export function CartButton({ onClick }: CartButtonProps) {
  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>5</span>
    </button>
  );
}
