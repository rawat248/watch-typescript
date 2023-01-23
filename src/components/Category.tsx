import React, { useContext } from "react";
import "./Category.css";
import Form from "./Form";
import Filter from "./Filter";
import Item from "./Item";
import { dataContext } from "../context/Context";

const Category = () => {
  const { filter, catItems } = useContext(dataContext);
  return (
    <div className="container">
      <div className="list">
        <Form />
        <h1 className="head">Categories</h1>

        {catItems.map((curElem) => {
          return (
            <button className="btn" onClick={() => filter(curElem)}>
              {curElem}
            </button>
          );
        })}

        <h1>Maximum Price</h1>
        <Filter />
      </div>
      <div className="item">
        <Item />
      </div>
    </div>
  );
};

export default Category;
