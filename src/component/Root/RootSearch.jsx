import React from 'react'

import { IoMdNotifications } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const RootSearch = () => {
  return (
    <div className="w-full flex justify-between gap-x-5 px-5">
      <input
        type="text"
        placeholder="Search for product.."
        className="w-full rounded-2xl bg-gray-100 px-5 py-2"
      />
      <div className="w-[20%] flex justify-start items-center gap-5">
        <span className="text-[24px] cursor-pointer">
          <IoMdNotifications />
        </span>
        <span className="text-[24px] mr-10 cursor-pointer">
          <MdEmail />
        </span>
        <div className="w-10 h-10 bg-gray-400 rounded-full cursor-pointer"></div>
      </div>
    </div>
  );
}

export default RootSearch