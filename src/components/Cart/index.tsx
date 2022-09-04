import { useContext } from "react";
import { CartContext } from "../Contexts";
import { Modal } from "../Modal";
import { CartItems } from "../CartItems";
import type { HTMLProps } from "react";
import classes from "./index.module.css";

interface CartProps {
  onCartHide: HTMLProps<HTMLDivElement | HTMLButtonElement>["onClick"];
}

export function Cart({ onCartHide }: CartProps) {
  const cartCtx = useContext(CartContext);
  const cartItems = cartCtx.items;
  return (
    <Modal onBackdropClick={onCartHide}>
      <CartItems items={cartItems} />
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{cartCtx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onCartHide}>
          Close
        </button>
        {cartCtx.items.length > 0 ? (
          <button className={classes.button}>Order</button>
        ) : undefined}
      </div>
    </Modal>
  );
}
