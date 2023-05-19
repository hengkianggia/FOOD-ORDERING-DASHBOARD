import React from "react";
import Card from "../UI/Card";
import { TfiMoney } from "react-icons/tfi";

const Transtractions = () => {
  return (
    <Card className="w-[49%] bg-white shadow-md max-h-80 pb-10">
      <h1>Transtraction</h1>
      <div className="w-full flex flex-col gap-y-3 mt-2">
        {/* item 1 */}
        <div
          id="item"
          className="flex justify-between w-full items-center py-2 border-b-2"
        >
          <span className="text-xl text-green-400">
            <TfiMoney />
          </span>
          <span>
            <h3 className="font-semibold text-lg">Pizza 500g</h3>
            <p className="text-xs">18 May 08.36AM</p>
          </span>
          <p>+ Rp 70.000</p>
        </div>

        {/* item 2 */}
        <div
          id="item"
          className="flex justify-between w-full items-center py-2 border-b-2"
        >
          <span className="text-xl text-green-400">
            <TfiMoney />
          </span>
          <span>
            <h3 className="font-semibold text-lg">Pizza 500g</h3>
            <p className="text-xs">18 May 08.36AM</p>
          </span>
          <p>+ Rp 70.000</p>
        </div>

        {/* item 3 */}
        <div
          id="item"
          className="flex justify-between w-full items-center py-2 border-b-2"
        >
          <span className="text-xl text-green-400">
            <TfiMoney />
          </span>
          <span>
            <h3 className="font-semibold text-lg">Pizza 500g</h3>
            <p className="text-xs">18 May 08.36AM</p>
          </span>
          <p>+ Rp 70.000</p>
        </div>
      </div>
    </Card>
  );
};

export default Transtractions;
