import React from "react";
import PagesNav from "../component/UI/PagesNav";
import MainTranstractions from "../component/Transtractions/MainTranstractions";

const Transtractions = () => {
  return (
    <div className="bg-gray-100 mt-5 pb-10 w-full">
      <PagesNav pages={"orders"} title={'Transtractions'}/>
      <MainTranstractions />
    </div>
  );
};

export default Transtractions;
