import type { HTMLProps } from "react";
import classes from "./index.module.css";

interface ModalBackdropProps {
  onClick: HTMLProps<HTMLDivElement>["onClick"];
}

export function ModalBackdrop({ onClick }: ModalBackdropProps) {
  return <div className={classes.backdrop} onClick={onClick} />;
}
