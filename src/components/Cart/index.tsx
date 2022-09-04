import { useContext } from "react";
import { CartContext } from "../Contexts";
import { Modal } from "../Modal";
import type { HTMLProps } from "react";
import classes from "./index.module.css";

export interface CartItem {
  id: string;
  name: string;
  amount: number;
  price: number;
  description: string;
}

interface CartProps {
  onCartHide: HTMLProps<HTMLDivElement | HTMLButtonElement>["onClick"];
}

export function Cart({ onCartHide }: CartProps) {
  const cartCtx = useContext(CartContext);
  const cartItems = cartCtx.items.map((meal) => {
    return (
      <ul className={classes["cart-items"]}>
        <li>{meal.name}</li>
      </ul>
    );
  });
  return (
    <Modal onBackdropClick={onCartHide}>
      {cartItems}
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
