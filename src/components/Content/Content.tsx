import { contentInfo } from "../../constants";
import { FaCheckCircle } from "react-icons/fa";

const Content = () => {
  return (
    <section className="md:flex md:items-start">
      <div className="mx-[50px] rounded-3xl font-bold flex flex-col items-center shadow-md bg-gradient-to-b from-white/40 md:w-[45%]">
        {contentInfo.map((item) => (
          <div className="mt-10 flex items-start gap-8">
            <div className="mt-[10px]">{item.icon}</div>
            <div className="text-26 w-[60%] flex flex-col min-w-[100px]">
              <p>{item.statistic}</p>
              <p className="text-13 font-semibold mb-[36px]">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-[50px] my-20 flex flex-col gap-10 md:text-20 md:mt-0 md:ml-[25%] md:justify-start">
        <div className="flex gap-5 items-center ">
          <FaCheckCircle size={"24px"} />
          <p>Bringing useful knowledge</p>
        </div>
        <div className="flex gap-5 items-center">
          <FaCheckCircle size={"24px"} />
          <p>Improve your income</p>
        </div>
        <div className="flex gap-5 items-center">
          <FaCheckCircle size={"24px"} />
          <p>Safe, secure, reputable</p>
        </div>
      </div>
    </section>
  );
};

export default Content;
