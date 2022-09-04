import { CartItem } from "../CartItem";
import type { CartItemProps } from "../CartItem";
import classes from "./index.module.css";

interface CartItemsProps {
  items: CartItem[];
  addCartItemHandler: CartItemProps["onAddItem"];
  removeCartItemHandler: CartItemProps["onRemoveItem"];
}

export function CartItems({
  items,
  addCartItemHandler,
  removeCartItemHandler,
}: CartItemsProps) {
  const liItems = items.map((item) => {
    return (
      <CartItem
        item={item}
        key={item.id}
        onAddItem={addCartItemHandler}
        onRemoveItem={removeCartItemHandler}
      />
    );
  });
  return <ul className={classes["cart-items"]}>{liItems}</ul>;
}
