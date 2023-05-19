import React from "react";
import Button from "../UI/Button";

const NavProduct = () => { 
  return (
    <div className="w-full flex items-center">
      <div className="w-full">
        <ul className="flex gap-x-5">
          <li>
            <Button text={"All Product"} />
          </li>
          <li>
            <Button text={"New Product"} />
          </li>
          <li>
            <Button text={"Food"} />
          </li>
          <li>
            <Button text={"Drink"} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavProduct;
