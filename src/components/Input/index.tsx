import { forwardRef } from "react";
import type { InputHTMLAttributes, Ref } from "react";
import classes from "./index.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function InputComponent(props: InputProps, ref: Ref<HTMLInputElement>) {
  return (
    <div className={classes.input}>
      <label htmlFor={props.id}>{props.label}</label>
      <input type="number" ref={ref} {...props} />
    </div>
  );
}

export const Input = forwardRef(InputComponent);
