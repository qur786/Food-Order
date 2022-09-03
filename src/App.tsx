import { Fragment } from "react";
import { Header } from "./components/Header";
import { Meals } from "./components/Meals";
import { Cart } from "./components/Cart";

function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
