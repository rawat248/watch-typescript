import React, { useContext } from "react";
import { dataContext } from "../context/Context";
import "./Item.css";

const Item = () => {
  const { data } = useContext(dataContext);
  return (
    <>
      <div className="column">
        <div className="row">
          {data.map((data) => {
            return (
              <>
                <div className="col" key={data.id}>
                  <div className="card">
                    <div className="cards">
                      <img src={data.img} className="top" alt="..."></img>
                    </div>
                    <div className="card-body">
                      <p className="card-text">{data.name}</p>
                      <span className="price">Rs.{data.price}</span>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Item;
