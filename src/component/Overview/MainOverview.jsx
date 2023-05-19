import React from "react";
import MainRevenue from "./MainRevenue";
import TotalUnitSales from "./TotalUnitSales";
import DailySales from "./DailySales";
import Summary from "./Summary";
import TotalOrder from "./TotalOrder";
import Transtractions from "./Transtractions";

const MainOverview = () => {
  return (
    <div className="w-full h[100vh] px-8 relative -mt-16 flex justify-between">
      <div id="left" className="w-[68%] h-full space-y-4">
        <MainRevenue />
        <div className="w-full flex flex-wrap justify-between gap-y-4">
          <DailySales />
          <Summary />
          <Transtractions />
        </div>
      </div>
      <div id="right" className="w-[30%] h-full space-y-4">
        <TotalUnitSales />
        <TotalOrder />
      </div>
    </div>
  );
};

export default MainOverview;
