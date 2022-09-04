import { useContext } from "react";
import { CartContext } from "../Contexts";
import { Modal } from "../Modal";
import { CartItem } from "../CartItem";
import type { HTMLProps } from "react";
import type { CartItemProps } from "../CartItem";
import classes from "./index.module.css";

interface CartProps {
  onCartHide: HTMLProps<HTMLDivElement | HTMLButtonElement>["onClick"];
}

export function Cart({ onCartHide }: CartProps) {
  const cartCtx = useContext(CartContext);
  const addCartItemHandler: CartItemProps["onAddItem"] = (item) => {
    console.log(item);
  };
  const removeCartItemHandler: CartItemProps["onRemoveItem"] = (id) => {
    console.log(id);
  };
  const cartItems = cartCtx.items.map((item) => {
    return (
      <ul className={classes["cart-items"]}>
        {
          <CartItem
            item={item}
            key={item.id}
            onAddItem={addCartItemHandler}
            onRemoveItem={removeCartItemHandler}
          />
        }
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
