import type { PropsWithChildren } from "react";
import classes from "./index.module.css";

export function Card(props: PropsWithChildren) {
  return <div className={classes.card}>{props.children}</div>;
}
