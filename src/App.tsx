import { Fragment } from "react";
import { Header } from "./components/Header";
import { Meals } from "./components/Meals";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
