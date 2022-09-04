import { CartItem } from "../CartItem";
import type { CartItemProps } from "../CartItem";
import classes from "./index.module.css";

interface CartItemsProps {
  items: CartItem[];
}

export function CartItems({ items }: CartItemsProps) {
  const addCartItemHandler: CartItemProps["onAddItem"] = (item) => {
    console.log(item);
  };
  const removeCartItemHandler: CartItemProps["onRemoveItem"] = (id) => {
    console.log(id);
  };
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
