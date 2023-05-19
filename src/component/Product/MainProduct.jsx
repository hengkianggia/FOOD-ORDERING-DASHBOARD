import React from "react";
import NavProduct from "./NavProduct";
import ProductItem from "../UI/ProductItem";

const MainProduct = () => {
  return (
    <div className="w-full min-h[100vh] px-8 relative -mt-16">
      <NavProduct />
      <div className="w-full flex flex-wrap gap-x-3 mt-10 gap-y-5">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  );
};

export default MainProduct;
