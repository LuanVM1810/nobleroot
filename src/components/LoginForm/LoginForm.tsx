import { useState } from "react";
import { PiEye } from "react-icons/pi";
import { PiEyeClosed } from "react-icons/pi";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="bg-gradient-to-b from-white/20 py-8 px-4 text-white shadow-md rounded-md md:text-20 ">
      <div className="flex flex-col">
        <p className="font-bold text-20 md:text-32">Welcome back</p>
        <p className="text-slate-300 md:text-20 font-light">
          Welcome back, please enter your details
        </p>
      </div>
      <div className="flex flex-col mt-10 gap-10 ">
        <div className="flex flex-col gap-1 md:gap-2">
          <label>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="p-2 rounded-md bg-white/30 text-white w-full outline-4 outline-purple-500"
          />
        </div>
        <div className="flex flex-col gap-1 md:gap-2">
          <label>Password</label>
          <div className="flex items-center relative">
            <input
              type={showPassword === true ? `text` : `password`}
              id="password"
              name="password"
              className="p-2 rounded-md w-full  bg-white/30 text-white outline-4 outline-purple-500"
            />
            {showPassword === true ? (
              <PiEyeClosed
                onClick={handleShowPassword}
                className="absolute right-2"
                color="white"
                size={"24px"}
              />
            ) : (
              <PiEye
                onClick={handleShowPassword}
                className="absolute right-2"
                color="white"
                size={"24px"}
              />
            )}
          </div>
        </div>
        <button className="btn">Sign In</button>
        <p className="font-thin">
          Don't have account?{" "}
          <span className="font-semibold hover:underline cursor-pointer">
            Sign up for free
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
