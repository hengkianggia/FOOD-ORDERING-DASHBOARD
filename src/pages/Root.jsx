import React from "react";
import { Outlet } from "react-router-dom";
import MainNavbar from "../component/Root/MainNavbar";
import RootSearch from "../component/Root/RootSearch";


const Root = () => {
  return (
    <>
      <div className="flex justify-between w-full h-[100vh] relative box-border items-center">
        <MainNavbar />
        <main className="w-[82%] h-full pt-6 flex flex-col relative ml-[18%]">
          <RootSearch/>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Root;
