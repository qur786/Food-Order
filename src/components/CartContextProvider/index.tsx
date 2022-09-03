import { PropsWithChildren } from "react";
import { CartContext } from "../Contexts";

export function CartContextProvider({ children }: PropsWithChildren) {
  const addItemHandler: CartContext["addItem"] = () => {};
  const removeItemHandler: CartContext["removeItem"] = () => {};

  const cartConext: CartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartConext}>{children}</CartContext.Provider>
  );
}
