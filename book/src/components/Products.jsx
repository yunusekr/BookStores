import React, { useEffect } from "react";
import { getCategories, getProducts } from "../store/actions";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import Categories from "./Categories";
import "./AddButton.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Products() {
  let history = useHistory();
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products);
  const categories = useSelector((store) => store.categories);
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
  }, []);

  const getAllProducts = () => {
    dispatch(getProducts());
  };

  const goAddPage = () => {
    history.push("/products/add");
  };

  return (
    <div>
      <div className="flex justify-end mr-[50px] pt-[50px]">
        <button
          onClick={goAddPage}
          className="flex justify-center items-center gap-2 w-28 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#14b8a6] via-[#059669] to-[#047857] hover:shadow-xl hover:shadow-green-500 hover:scale-105 duration-300 hover:from-[#047857] hover:to-[#14b8a6] "
        >
          <p>Add Book</p>
          <svg className="w-5 fill-white" viewBox="0 0 15 15">
            <svg
              className="w-6 h-6"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
          </svg>
        </button>
      </div>
      <div className="flex justify-center gap-28 p-10">
        <button className="but" onClick={getAllProducts}>
          <span className="text">TÜM ÜRÜNLER</span>
        </button>
        {categories.map((item, index) => (
          <Categories key={item.id} item={item} index={index} />
        ))}
      </div>
      <div className="flex justify-center flex-wrap">
        {products.map((item, index) => (
          <ProductCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Products;
