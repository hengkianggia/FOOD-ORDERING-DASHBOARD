import React from "react";

import { BsArrowUp } from "react-icons/bs";

const TotalUnitSales = () => {
  return (
    <div className="w-full">
      <div className="w-full h-96 bg-white rounded-tl-md rounded-tr-md p-5">
        <h1>Total sales unit</h1>
      </div>
      <div className="w-full h-32 bg-slate-900 p-5 rounded-bl-md rounded-br-md text-white text-center flex flex-col items-center">
        <h1 className="text-sm">This Month Revenue</h1>
        <h3 className="text-4xl">Rp 5.000.000</h3>
        <div className="flex items-center mt-3 gap-x-3 text-green-400">
          <div>
            <BsArrowUp />
          </div>
          <p>From last month</p>
        </div>
      </div>
    </div>
  );
};

export default TotalUnitSales;
