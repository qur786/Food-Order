import type { PropsWithChildren } from "react";
import classes from "./index.module.css";

export function ModalOverLays(props: PropsWithChildren) {
  return (
    <div className={classes.modal}>
      <div>{props.children}</div>
    </div>
  );
}
