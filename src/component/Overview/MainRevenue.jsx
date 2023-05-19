import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

const MainRevenue = () => {
  return (
    <Card className="w-full h-96 bg-white">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-xl font-semibold">Revenue</h1>
        <div>
          <ul className="flex gap-x-3">
            <Button text={'This Day'}/>
            <Button text={'This Week'}/>
            <Button text={'This Month'}/>
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default MainRevenue;
