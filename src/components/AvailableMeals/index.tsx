import { Card } from "../Card";
import classes from "./index.module.css";

interface Meal {
  id: string;
  name: string;
  description: string;
  price: number;
}

interface AvailableMealsProps {
  meals: Meal[];
}

export function AvailableMeals({ meals }: AvailableMealsProps) {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {meals.map((meal) => (
            <li>{meal.name}</li>
          ))}
        </ul>
      </Card>
    </section>
  );
}
