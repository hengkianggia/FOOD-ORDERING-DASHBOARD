import React from "react";
import MainOverview from "../component/Overview/MainOverview";
import PagesNav from "../component/UI/PagesNav";

const Overview = () => {
  return (
    <div className="bg-gray-100 mt-5 pb-10">
      <PagesNav pages={'Overview'}/>
      <MainOverview />
    </div>
  );
};

export default Overview;
