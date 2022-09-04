import { useRef, useState } from "react";
import { Input } from "../Input";
import type { HTMLProps } from "react";
import classes from "./index.module.css";

export function MealItemForm() {
  const InputRef = useRef<HTMLInputElement | null>(null);
  const [isAmountValid, setIsAmountValid] = useState(true);

  const onSubmitHandler: HTMLProps<HTMLFormElement>["onSubmit"] = (event) => {
    event.preventDefault();
    const amount = Number.parseFloat(InputRef.current?.value ?? "");
    if (amount < 1 || amount > 10) {
      setIsAmountValid(false);
    } else {
      setIsAmountValid(true);
    }
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <Input
        ref={InputRef}
        label="Amount"
        id="Amount"
        type="number"
        min="1"
        max="10"
        defaultValue="1"
        step="1"
      />
      <button>+ Add</button>
      {isAmountValid === false ? (
        <p>Please! Enter a valid amount.</p>
      ) : undefined}
    </form>
  );
}
