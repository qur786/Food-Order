import { useReducer } from "react";
import { CartContext } from "../Contexts";
import type { PropsWithChildren, Reducer } from "react";
import type { CartItem } from "../CartItem";

interface AddItemAction {
  type: "add-item";
  item: CartItem;
}

interface RemoveItemAction {
  type: "remove-item";
  id: string;
}

type DispatchCartAction = AddItemAction | RemoveItemAction;

interface CartState {
  items: CartItem[];
  totalAmount: number;
}

const defaultCartState: CartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer: Reducer<CartState, DispatchCartAction> = (
  prevState,
  action
) => {
  let updatedState = defaultCartState;
  if (action.type === "add-item") {
    let updatedItem = action.item;
    let updatedItems = prevState.items;
    const existingItemIndex = prevState.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = updatedItems[existingItemIndex];
    if (existingItem !== undefined) {
      updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = updatedItems.concat(updatedItem);
    }
    updatedState = {
      ...updatedState,
      items: updatedItems,
      totalAmount:
        prevState.totalAmount + action.item.price * action.item.amount,
    };
  }
  return updatedState;
};

export function CartContextProvider({ children }: PropsWithChildren) {
  const [state, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemHandler: CartContext["addItem"] = (item) => {
    dispatchCartAction({
      type: "add-item",
      item,
    });
  };

  const removeItemHandler: CartContext["removeItem"] = (id) => {
    dispatchCartAction({
      type: "remove-item",
      id,
    });
  };

  const cartConext: CartContext = {
    items: state.items,
    totalAmount: state.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartConext}>{children}</CartContext.Provider>
  );
}
