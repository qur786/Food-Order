import { Fragment } from "react";
import { createPortal } from "react-dom";
import { ModalBackdrop } from "../ModalBackdrop";
import { ModalOverLays } from "../ModalOverLays";
import type { PropsWithChildren, HTMLProps } from "react";

interface ModalProps extends PropsWithChildren {
  onBackdropClick: HTMLProps<HTMLDivElement>["onClick"];
}

export function Modal({ children, onBackdropClick }: ModalProps) {
  const portalElement = document.getElementById("overlays") as HTMLDivElement;
  return (
    <Fragment>
      {createPortal(<ModalBackdrop onClick={onBackdropClick} />, portalElement)}
      {createPortal(<ModalOverLays>{children}</ModalOverLays>, portalElement)}
    </Fragment>
  );
}
