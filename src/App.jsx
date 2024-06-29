import React from "react";
import Todo from "./useState/UseTodo";
import UseEffect from "./useEffect/UseEffect";
import DataFetching from "./useEffect/DataFetching";
import CockTailFetching from "./useEffect/CockTailFetching";

const App = () => {
  return (
    <main className="container">
      <CockTailFetching />
    </main>
  );
};

export default App;
