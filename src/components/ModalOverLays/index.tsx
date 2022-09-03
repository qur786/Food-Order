import type { PropsWithChildren } from "react";

export function ModalOverLays(props: PropsWithChildren) {
  return (
    <div>
      <div>{props.children}</div>
    </div>
  );
}
