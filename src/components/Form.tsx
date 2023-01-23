import React, { useContext } from "react";
import "./Category.css";
import "./Form.css";
import { dataContext } from "../context/Context";

const Form = () => {
  const { inputSearch, changeInput } = useContext(dataContext);
  return (
    <div className="mainContainer">
      <form className="form">
        <input
          type="text"
          name="text"
          placeholder="Search..."
          onChange={changeInput}
          value={inputSearch}
          className="input"
        ></input>
      </form>
    </div>
  );
};

export default Form;
