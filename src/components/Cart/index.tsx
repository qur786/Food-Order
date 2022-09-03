import { Modal } from "../Modal";
import classes from "./index.module.css";

export function Cart() {
  const cartItems = [
    { id: "1", name: "Sushi", description: "Rice with fish", price: 100 },
  ].map((meal) => {
    return (
      <ul className={classes["cart-items"]}>
        <li>{meal.name}</li>
      </ul>
    );
  });
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>50</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}
