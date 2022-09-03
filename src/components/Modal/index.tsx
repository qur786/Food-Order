import { Fragment } from "react";
import { createPortal } from "react-dom";
import { ModalBackdrop } from "../ModalBackdrop";
import { ModalOverLays } from "../ModalOverLays";
import type { PropsWithChildren } from "react";

export function Modal(props: PropsWithChildren) {
  const portalElement = document.getElementById("overlays") as HTMLDivElement;
  return (
    <Fragment>
      {createPortal(<ModalBackdrop />, portalElement)}
      {createPortal(
        <ModalOverLays>{props.children}</ModalOverLays>,
        portalElement
      )}
    </Fragment>
  );
}
