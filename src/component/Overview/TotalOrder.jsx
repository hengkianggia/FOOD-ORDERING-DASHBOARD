import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

const TotalOrder = () => {
  return (
    <Card className="w-full bg-white shadow-md h-64">
      <div className="flex justify-between items-center">
        <h1>Total Order</h1>
        <span className="flex gap-x-1">
          <Button text={"Today"} />
          <Button text={"This Week"} />
        </span>
      </div>
    </Card>
  );
};

export default TotalOrder;
