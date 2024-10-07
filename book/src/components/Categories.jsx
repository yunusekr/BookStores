import React from "react";
import "./Button.css";
import { useDispatch } from "react-redux";
import { getCategoriesProducts } from "../store/actions";

function Categories(props) {
  const { item, index } = props;
  let dispatch = useDispatch();

  const getProductsOfCategory = (event) => {
    dispatch(getCategoriesProducts(event.target.id));
  };

  return (
    <button className="but" onClick={getProductsOfCategory}>
      <span id={item.id} className="text">
        {item.name}
      </span>
    </button>
  );
}

export default Categories;
