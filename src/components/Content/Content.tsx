import React from "react";
import { FaUser } from "react-icons/fa";
import { SiCoursera } from "react-icons/si";
import { contentInfo } from "../../constants";
type Props = {};

const Content = (props: Props) => {
  return (
    <section>
      <div className="ml-[70px] mr-[54px] rounded-3xl font-bold flex flex-col items-center shadow-md bg-gradient-to-b from-white/40 to-transparent">
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
    </section>
  );
};

export default Content;
