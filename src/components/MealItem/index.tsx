import { MealItemForm } from "../MealItemForm";
import classes from "./index.module.css";

export interface MealItemProps {
  name: string;
  description: string;
  price: number;
}

export function MealItem({ name, description, price }: MealItemProps) {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{`$${price}`}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
}
