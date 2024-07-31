import LoginForm from "../../components/LoginForm/LoginForm";
import Card from "../../assets/NobleRoot (9).png";
import { NavLink } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";

const LoginPage = () => {
  return (
    <>
      <NavLink to="/">
        <FaAngleLeft
          size={"24px"}
          className="block md:hidden mt-2 text-center"
        />
      </NavLink>

      <div className="md:flex pt-14 md:pt-24 md:justify-center md:items-center">
        <LoginForm />
        <div className="relative md:w-[50%]">
          <NavLink to="/">
            <img
              className="hidden md:block md:ml-20"
              width={"80%"}
              src={Card}
              alt=""
            />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
