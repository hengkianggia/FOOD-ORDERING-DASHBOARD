import React from "react";
import { Link } from "react-router-dom";

const PagesNav = (props) => {
  return (
    <div className="w-full bg-hijau px-8 pt-5 pb-24 relative">
      <h1 className="text-3xl font-bold text-white mb-2">{props.title}</h1>
      <div>
        <ul className="text-white text-sm">
          <Link>
            <li>PNGKY | {props.pages}</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default PagesNav;
