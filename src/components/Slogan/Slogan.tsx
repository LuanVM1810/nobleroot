import React from "react";
import Card from "../../assets/isocard.svg";
type Props = {};

const Slogan = (props: Props) => {
  return (
    <section className="text-36 my-14 font-extrabold">
      <div className="text-center">
        <p>
          Earn <span className="text-purple-300">More</span>
        </p>
        <p>Pay Less</p>
        <button className="text-20 px-6 py-[6px] mt-[27px] bg-purple-500 rounded-[14px] font-bold hover:bg-pink-500 transition-all duration-300">
          Start
        </button>
      </div>
      <div className="mt-[50px]">
        <img src={Card} alt="" />
      </div>
    </section>
  );
};

export default Slogan;
