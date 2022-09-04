import { useContext } from "react";
import { CartContext } from "../Contexts";
import { MealItemForm } from "../MealItemForm";
import type { MealItemFormProps } from "../MealItemForm";
import classes from "./index.module.css";

export interface MealItemProps {
  id: string;
  name: string;
  description: string;
  price: number;
}

export function MealItem({ id, name, description, price }: MealItemProps) {
  const cartCtx = useContext(CartContext);

  const addToCartHandler: MealItemFormProps["onAddToCart"] = (amount) => {
    cartCtx.addItem({
      id,
      name,
      amount,
      price,
      description,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{`$${price}`}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}
