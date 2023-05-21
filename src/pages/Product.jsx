import React from "react";
import PagesNav from "../component/UI/PagesNav";
import MainProduct from "../component/Product/MainProduct";

const Product = () => {
  return (
    <div className="bg-gray-100 mt-5 pb-10 w-full">
      <PagesNav pages={"Product"} title={'Product'}/>
      <MainProduct />
    </div>
  );
};

export default Product;
