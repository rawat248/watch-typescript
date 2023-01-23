import React, { useContext } from "react";
import "./Filter.css";
import { dataContext } from "../context/Context";

const Filter = () => {
  const { handleChangePrice, selectedPrice, minValue, maxValue } =
    useContext(dataContext);

  return (
    <div className="App">
      <div className="box">
        <input
          type="range"
          value={selectedPrice}
          onChange={handleChangePrice}
          min={minValue}
          max={maxValue}
          name="price"
        ></input>
      </div>
      <div className="value">Rs.{selectedPrice}</div>
    </div>
  );
};

export default Filter;
