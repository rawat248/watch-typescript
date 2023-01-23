import React, { useState, useEffect, createContext } from "react";
import { Menu } from "./Data";
import PropTypes from "prop-types";

type childProps = {
  children: React.ReactNode;
};

interface Data {
  id: number;
  name: string;
  img: string;
  cat: string;
  price: number;
}

interface ContextProps {
  inputSearch: string;
  changeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangePrice: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedPrice: number;
  data: Data[];
  filter: (catItem: string) => void;
  catItems: string[];
  minValue: number;
  maxValue: number;
}

export const dataContext = createContext<ContextProps>({} as ContextProps);
const allCatValues = [...new Set(Menu.map((curElem) => curElem.cat)), "All"];
console.log(allCatValues);
const maxArray = Menu.map((item) => item.price);
const maxValue = Math.max(...maxArray);
console.log(maxValue);
const minValue = 0;

const Context = ({ children }: childProps) => {
  const [data, setData] = useState<Data[]>(Menu);
  const [inputSearch, setInputSearch] = useState("");
  const [selectedPrice, setSelectedPrice] = useState(maxValue);

  const catItems = allCatValues;
  console.log(typeof catItems);

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputSearch(e.target.value);

  const filter = (catItem: string) => {
    if (catItem === "All") {
      setData(Menu);
      return;
    }
    const result = Menu.filter((curData) => {
      return curData.cat === catItem;
    });
    setData(result);
  };

  const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPrice(Number(e.target.value));
  };

  const applyFilters = () => {
    let updatedList = Menu;

    if (selectedPrice) {
      updatedList = updatedList.filter((item) => item.price <= selectedPrice);
    }

    if (inputSearch) {
      updatedList = updatedList.filter(
        (item) =>
          item.name.toLowerCase().search(inputSearch.toLowerCase().trim()) !==
          -1
      );
    }

    setData(updatedList);
  };
  useEffect(() => {
    applyFilters();
  }, [inputSearch, selectedPrice]);

  return (
    <dataContext.Provider
      value={{
        inputSearch,
        changeInput,
        handleChangePrice,
        selectedPrice,
        data,
        filter,
        catItems,
        minValue,
        maxValue,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};
Context.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Context;
