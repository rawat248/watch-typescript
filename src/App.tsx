import React from "react";
import Category from "./components/Category";
import Context from "./context/Context";

const App = () => {
  return (
    <div>
      <Context>
        <Category />
      </Context>
    </div>
  );
};

export default App;
