import React from "react";
import image from "../../assets/image/pattern.jpg";
import { FiEdit } from "react-icons/fi";
import { IoAddCircleSharp } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";

const MainProfile = () => {
  return (
    <div className="w-full pb-10 shadow-xl pl-[18%] bg-white">
      {/* background */}
      <div className="w-full max-h-[30vh] overflow-hidden">
        <img
          src={image}
          alt="image"
          className="object-cover object-center w-full"
        />
      </div>

      <div className="w-full px-8 relative">
        {/* profile photo */}
        <div className="w-56 h-56 bg-red-400 rounded-full  -mt-[110px] overflow-hidden">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* description */}
        <div className="mt-6 flex justify-between border-b pb-5">
          <div>
            <h1 className="text-2xl font-semibold">Safa Aulia Nur Fadilla</h1>
            <h2>Sukosari, Trenggalek, Jawa Timur, Indonesia </h2>
            <h3 className="font-semibold">Admin PNGKY - Full time</h3>
          </div>

          <span className="text-lg cursor-pointer">
            <FiEdit />
          </span>
        </div>

        {/* note */}
        <div className="w-full mt-5">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold">Note</h1>
            <span className="text-xl">
              <IoAddCircleSharp />
            </span>
          </div>

          <div className="w-full flex flex-col mt-5 gap-y-3">
            {/* item 1*/}
            <div className="cursor-pointer rounded-lg p-3 bg-gray-100 flex justify-between items-center">
              <span>
                <h1 className="text-lg font-semibold">Judul Note</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus, nobis!
                </p>
              </span>
              <span>
                <BsThreeDots />
              </span>
            </div>

            {/* item 2*/}
            <div className="cursor-pointer rounded-lg p-3 bg-gray-100 flex justify-between items-center">
              <span>
                <h1 className="text-lg font-semibold">Judul Note</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus, nobis!
                </p>
              </span>
              <span>
                <BsThreeDots />
              </span>
            </div>

            {/* item 3*/}
            <div className="cursor-pointer rounded-lg p-3 bg-gray-100 flex justify-between items-center">
              <span>
                <h1 className="text-lg font-semibold">Judul Note</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus, nobis!
                </p>
              </span>
              <span>
                <BsThreeDots />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainProfile;
