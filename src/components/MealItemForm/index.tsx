import { Input } from "../Input";
import type { HTMLProps } from "react";
import classes from "./index.module.css";

export function MealItemForm() {
  const clickHandler: HTMLProps<HTMLButtonElement>["onClick"] = (event) =>
    event.preventDefault();
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        id="Amount"
        type="number"
        min="1"
        max="10"
        defaultValue="1"
        step="1"
      />
      <button onClick={clickHandler}>+ Add</button>
    </form>
  );
}
