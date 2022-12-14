import { useState } from "react";
import { Header } from "./components/Header";
import { Meals } from "./components/Meals";
import { Cart } from "./components/Cart";
import { CartContextProvider } from "./components/CartContextProvider";
import type { HTMLProps } from "react";

function App() {
  const [showCart, setShowCart] = useState(false);
  const showCartHandler: HTMLProps<HTMLButtonElement>["onClick"] = () => {
    setShowCart(true);
  };
  const hideCartHandler: HTMLProps<
    HTMLButtonElement | HTMLDivElement
  >["onClick"] = () => {
    setShowCart(false);
  };
  return (
    <CartContextProvider>
      {showCart === true ? <Cart onCartHide={hideCartHandler} /> : undefined}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
