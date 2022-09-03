import type { InputHTMLAttributes } from "react";
import classes from "./index.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input(props: InputProps) {
  return (
    <div className={classes.input}>
      <label htmlFor={props.id}>{props.label}</label>
      <input type="number" {...props} />
    </div>
  );
}
