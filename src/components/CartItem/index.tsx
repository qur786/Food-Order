import classes from "./index.module.css";

export interface CartItem {
  id: string;
  name: string;
  amount: number;
  price: number;
  description: string;
}

export interface CartItemProps {
  item: CartItem;
  onAddItem: (item: CartItem) => void;
  onRemoveItem: (id: CartItem["id"]) => void;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
export function CartItem({ item, onAddItem, onRemoveItem }: CartItemProps) {
  const { amount, name, price, id } = item;
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{`$${price.toFixed(2)}`}</span>
          <span className={classes.amount}>x {amount}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={() => onAddItem(item)}>+</button>
          <button onClick={() => onRemoveItem(id)}>-</button>
        </div>
      </div>
    </li>
  );
}
