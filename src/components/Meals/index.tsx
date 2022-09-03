import { Fragment } from "react";
import { AvailableMeals } from "../AvailableMeals";
import { MealsSummary } from "../MealsSummary";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

export function Meals() {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals meals={DUMMY_MEALS} />
    </Fragment>
  );
}
