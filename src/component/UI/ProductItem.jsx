import React from "react";
import image from "../../assets/image/pattern.jpg";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";

const ProductItem = () => {
  return (
    <div className="w-[19%] relative gap-y-3 bg-white rounded-md overflow-hidden">
      {/* image */}
      <div>
        <img
          src={image}
          alt="image"
          className="w-full h-48 object-cover object-center"
        />
      </div>

      {/* descriptions */}
      <div className="my-3 mb-5 px-3">
        <h3 className="text-xl font-semibold">Pizaa Hut Cream</h3>
        <p className="text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
        <span className="w-full flex justify-between mt-3 items-center">
          <h4>Rp 70.000</h4>
          <Link>
            <p className="text-xs flex items-center text-green-400">
              Get Detail <BsArrowRightShort />
            </p>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default ProductItem;
