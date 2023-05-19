import React from "react";
import { Link } from "react-router-dom";

const MainNavbar = () => {
  return (
    <nav className="h-[100vh] w-[18%] p-7 shadow-2xl fixed z-[9999] bg-white">
      <Link to={'/dashboard'}>
        <h1 className="text-2xl font-semibold mb-5">PNGKY DASH</h1>
      </Link>
      <div>
        <h2 className="text-lg font-semibold">Menu</h2>
        <ul className="flex flex-col gap-y-4 mt-3 text-base">
          <Link to={'/dashboard'}>
            <li>Overview</li>
          </Link>
          <Link to={'orders'}>
            <li>Orders</li>
          </Link>
          <Link to={'product'}>
            <li>Product</li>
          </Link>
          <Link to={'addproduct'}>
            <li>Add Product</li>
          </Link>
        </ul>
      </div>

      <div className="mt-10">
        <h2 className="text-lg font-semibold">Bussiness</h2>
        <ul className="flex flex-col gap-y-4 mt-3 text-base">
          <Link>
            <li>Team</li>
          </Link>
          <Link>
            <li>Customer Chat</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default MainNavbar;
