import React, { useState } from "react";
import CTA1 from "./CTA1";
import CTA2 from "./CTA2";

const CTA = () => {
  const [visibleComponent, setVisibleComponent] = useState("first");

  return (
    <section className="container mx-auto p-5 -mt-8 lg:mt-10 relative">
      <div className="gap-4 sm:gap-2 flex relative">
        <button
          onClick={() => setVisibleComponent("first")}
          className={`${
            visibleComponent === "first"
              ? "bg-white text-DarkGray"
              : "bg-Orange text-white"
          } py-[5px] px-[15px] lg:py-[10px] ease-in-out duration-300 lg:px-[30px] font-semibold text-lg rounded-t-lg relative`}
        >
          Search Tour
        </button>
        <button
          onClick={() => setVisibleComponent("second")}
          className={`${
            visibleComponent === "second"
              ? "bg-white text-DarkGray"
              : "bg-Orange text-white"
          } py-[5px] px-[15px] sm:py-[10px] ease-in-out duration-300 sm:px-[30px] font-semibold text-lg rounded-t-lg relative`}
        >
          Hotel
        </button>
      </div>

      <div className="relative">{visibleComponent === "first" ? <CTA1 /> : <CTA2 />}</div>
    </section>
  );
};

export default CTA;
