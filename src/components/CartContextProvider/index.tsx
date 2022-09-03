import { createContext, PropsWithChildren } from "react";
import type { Meal } from "../AvailableMeals";

interface CartContext {
  items: Meal[];
  totalAmount: number;
  addItem: (item: Meal) => void;
  removeItem: (id: Meal["id"]) => void;
}

const CartConext = createContext<CartContext>({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
});

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
    <CartConext.Provider value={cartConext}>{children}</CartConext.Provider>
  );
}
