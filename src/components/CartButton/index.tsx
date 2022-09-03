import { useContext } from "react";
import { CartIcon } from "../CartIcon";
import { CartContext } from "../Contexts";
import type { HTMLProps } from "react";
import classes from "./index.module.css";

interface CartButtonProps {
  onClick: HTMLProps<HTMLButtonElement>["onClick"];
}

export function CartButton({ onClick }: CartButtonProps) {
  const cartCtx = useContext(CartContext);
  const totalItems = cartCtx.items.reduce((curr, ele) => curr + ele.amount, 0);

  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
}
