import Card from "../../assets/isocard.svg";

const Slogan = () => {
  return (
    <section className="text-36 my-14 font-extrabold md:my-28 md:grid md:grid-cols-3 md:items-center md:text-48">
      <div className="text-center md:col-span-1 md:col-start-2">
        <p>
          Earn <span className="text-purple-300">More</span>
        </p>
        <p>Pay Less</p>
        <button className="focus:ring focus:ring-white text-20 px-6 py-[6px] mt-[27px] bg-purple-500 rounded-[14px] font-bold hover:bg-pink-500 transition-all duration-300 md:text-26">
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
