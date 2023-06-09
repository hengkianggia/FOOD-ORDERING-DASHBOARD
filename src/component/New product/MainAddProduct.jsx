import React, { useState } from "react";

import { IoAddCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Button from "../UI/Button";

const MainAddProduct = () => {
  const [discount, setDiscount] = useState(false);
  const [checked, setChecked] = useState(false);
  const showDiscountHandler = () => {
    setDiscount(!discount);
  };

  return (
    <div className="w-full min-h[100vh] px-8 relative -mt-16">
      <form className="w-full p-5 bg-white rounded-md shadow-md flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-semibold text-lg">
            Nama product
          </label>
          <input
            type="text"
            id="name"
            placeholder="Masukkan nama product"
            className="p-2 border"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="Deskripsi" className="font-semibold text-lg">
            Deskripsi
          </label>
          <textarea
            type="text"
            id="Deskripsi"
            placeholder="Masukkan deskripsi product"
            className="p-2 border min-h-[30vh]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="Kategori" className="font-semibold text-lg">
            Kategori
          </label>
          <span className="flex gap-x-5">
            <label>
              <input
                type="checkbox"
                defaultChecked={checked}
                onChange={() => setChecked(!checked)}
              />
              Makanan
            </label>
            <label>
              <input
                type="checkbox"
                defaultChecked={checked}
                onChange={() => setChecked(!checked)}
              />
              Minuman
            </label>
            <label>
              <input
                type="checkbox"
                defaultChecked={checked}
                onChange={() => setChecked(!checked)}
              />
              Lunch
            </label>
            <label>
              <input
                type="checkbox"
                defaultChecked={checked}
                onChange={() => setChecked(!checked)}
              />
              Breakfast
            </label>
            <label>
              <input
                type="checkbox"
                defaultChecked={checked}
                onChange={() => setChecked(!checked)}
              />
              Dinner
            </label>
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-semibold text-lg">
            Harga
          </label>
          <input
            type="number"
            id="name"
            placeholder="Masukkan harga product"
            className="p-2 border w-full"
          />
          <div className="text-md flex items-center gap-4 cursor-pointer self-end">
            <span
              className="flex items-center gap-1"
              onClick={showDiscountHandler}
            >
              <IoAddCircleSharp />
              <p>berikan diskon</p>
            </span>
            {discount ? (
              <div className="flex items-center gap-4">
                <input
                  type="text"
                  placeholder="jumlah nominal diskon"
                  className="p-2 border"
                />
                <h3 className="text-red-400 text-lg ml-2">
                  Harga akhir : Rp. 50.000
                </h3>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="mt-5">
          <Link>
            <Button text={"Lihat preview"} className={"w-[15%] bg-green-300"} />
          </Link>
        </div>

        <Button
          text={"Post"}
          className={"w-[15%] bg-green-300"}
          type={"submit"}
        />
      </form>
    </div>
  );
};

export default MainAddProduct;
