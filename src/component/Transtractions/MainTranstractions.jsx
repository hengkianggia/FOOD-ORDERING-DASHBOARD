import React from "react";
import Card from "../UI/Card";

const MainTranstractions = () => {
  return (
    <div className="w-full min-h[100vh] px-8 relative -mt-16 flex justify-between">
      {/* left */}
      <Card className="w-[65%] h-[100vh] bg-white space-y-3">
        <h1 className="text-lg font-semibold">Transtraksi Terbaru</h1>

        {/* transtraction 1 */}
        <div className="w-full space-y-1 border-b">
          <span className="flex items-center justify-between">
            <div className="flex gap-3 items-center">
              <h2 className="text-3xl font-semibold">Pizza Hut</h2>
              <p>2x</p>
            </div>
            <p className="font-semibold">Rp 140.000</p>
          </span>
          <p>Oleh : Safa Aulia pukul 11.29AM</p>
        </div>

        {/* transtraction 2 */}
        <div className="w-full space-y-1 border-b">
          <span className="flex items-center justify-between">
            <div className="flex gap-3 items-center">
              <h2 className="text-3xl font-semibold">Pizza Hut</h2>
              <p>2x</p>
            </div>
            <p className="font-semibold">Rp 140.000</p>
          </span>
          <p>Oleh : Safa Aulia pukul 11.29AM</p>
        </div>
      </Card>

      {/* right */}
      <Card className="w-[34%] h-[100vh] bg-white"></Card>
    </div>
  );
};

export default MainTranstractions;
