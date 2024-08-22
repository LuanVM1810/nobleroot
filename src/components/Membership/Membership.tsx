import { FaCheckCircle } from "react-icons/fa";
import { membershipContent } from "../../constants";

const Membership = () => {
  return (
    <div>
      <div className="flex my-20 text-center gap-6 flex-col px-4 py-6 bg-gradient-to-r from-purple-900 via-purple-700 to-purple-500 mx-[50px] shadow-md rounded-2xl">
        <div className="space-y-4">
          <p className="text-26 font-bold lg:text-32 uppercase">
            Join Nobleroot membership
          </p>
          <p className="font-semibold lg:text-20">
            As a NobleRoot member, you will enjoy the following benefits
          </p>
          <ul className="flex flex-col gap-4 font-light lg:text-20 md:items-center">
            {membershipContent.map((item) => (
              <li className="flex">
                <span className="mr-2 mt-1">
                  <FaCheckCircle size={"24px"} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[100%] bg-white h-1 rounded-full"></div>
        <div className="flex flex-col gap-10">
          <p className="text-26 font-bold uppercase">Select your plan</p>
          <div className="flex flex-col gap-10 lg:flex-row">
            <div className="bg-gradient-to-b from-purple-900 via-purple-700 to-purple-500 lg:w-[33%] hover:translate-y-[-10px] transition-all duration-300 py-4 rounded-2xl shadow-md text-white">
              <p className="text-24 font-light">Weekly</p>
              <p className="text-32 font-extrabold">$12/week</p>
              <button className="btn">Join now</button>
            </div>
            <div className="bg-gradient-to-b from-purple-900 via-purple-700 to-purple-500 lg:w-[33%] hover:translate-y-[-10px] transition-all duration-300 py-4 rounded-2xl shadow-md text-white">
              <p className="text-24 font-light">Monthly</p>
              <p className="text-32 font-extrabold">$35/month</p>
              <button className="btn">Join now</button>
            </div>
            <div className="bg-gradient-to-b from-purple-900 via-purple-700 to-purple-500 lg:w-[33%] hover:translate-y-[-10px] transition-all duration-300 py-4 rounded-2xl shadow-md text-white">
              <p className="text-24 font-light">Yearly</p>
              <p className="text-32 font-extrabold">$300/year</p>
              <button className="btn">Join now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
