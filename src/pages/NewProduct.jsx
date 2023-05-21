import React from "react";
import PagesNav from "../component/UI/PagesNav";
import MainAddProduct from "../component/New product/MainAddProduct";

const NewProduct = () => {
  return (
    <div className="bg-gray-100 mt-5 pb-10 w-full">
      <PagesNav pages={"Add product"} title={'Add product'}/>
      <MainAddProduct />
    </div>
  );
};

export default NewProduct;
