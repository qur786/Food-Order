import { Card } from "../Card";
import { MealItem } from "../MealItem";
import type { MealItemProps } from "../MealItem";
import classes from "./index.module.css";

interface Meal extends MealItemProps {
  id: string;
}

interface AvailableMealsProps {
  meals: Meal[];
}

export function AvailableMeals({ meals }: AvailableMealsProps) {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {meals.map(({ id, name, description, price }) => (
            <MealItem
              key={id}
              name={name}
              description={description}
              price={price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
}
