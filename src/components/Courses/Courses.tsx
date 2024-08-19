import PhanTichKiThuatImg from "../../assets/16.svg";
import PhanTichDuAnImg from "../../assets/17.svg";
import OnChainImg from "../../assets/18.svg";

const Courses = () => {
  return (
    <div className="mx-[50px] mb-[70px] flex flex-col gap-10 lg:flex-row">
      <div className="bg-purple-700 p-4 hover:translate-y-[-5%] transition-all duration-500 shadow-md rounded-2xl flex flex-col gap-4 items-center">
        <img src={PhanTichKiThuatImg} className="rounded-xl" />
        <div className="my-5 flex flex-col items-center gap-4">
          <p className="font-bold text-20 text-center lg:text-26">
            Phân tích kĩ thuật
          </p>
          <p className="font-light text-center lg:text-20">
            Learn how to analyze charts and market trends to make informed
            trading decisions.
          </p>
          <button className="btn">Enroll now</button>
        </div>
      </div>

      <div className="bg-purple-700 p-4 hover:translate-y-[-5%] transition-all duration-500 shadow-md rounded-2xl flex flex-col gap-4 items-center">
        <img src={PhanTichDuAnImg} className="rounded-xl" />
        <div className="my-5 flex flex-col items-center gap-4">
          <p className="font-bold text-20 text-center lg:text-26">
            Phân tích dự án
          </p>
          <p className="font-light text-center lg:text-20">
            Learn how to analyze charts and market trends to make informed
            trading decisions.
          </p>
          <button className="btn">Enroll now</button>
        </div>
      </div>

      <div className="bg-purple-700 p-4 hover:translate-y-[-5%] transition-all duration-500 shadow-md rounded-2xl flex flex-col gap-4 items-center">
        <img src={OnChainImg} className="rounded-xl h-[120%]" />
        <div className="my-5 flex flex-col items-center gap-4">
          <p className="font-bold text-20 text-center lg:text-26">On-chain</p>
          <p className="font-light text-center lg:text-20">
            Dive into on-chain metrics to gain insights into blockchain activity
            and trends.
          </p>
          <button className="btn">Enroll now</button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
