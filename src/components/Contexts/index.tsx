import { createContext } from "react";
import type { CartItem } from "../CartItem";

export interface CartContext {
  items: CartItem[];
  totalAmount: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: CartItem["id"]) => void;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CartContext = createContext<CartContext>({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
});
