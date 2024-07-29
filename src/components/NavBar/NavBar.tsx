import { HiOutlineMenu } from "react-icons/hi";
import NobleRootLogo from "../../assets/NobleRoot (9).png";

const NavBar = () => {
  return (
    <nav className="flex items-center">
      <div className="flex items-center">
        {/* <div className="text-20 font-bold mr-2">NobleRoot</div>
        <FaBitcoin size={"24px"} color="#e9c463" className="cursor-pointer" /> */}
        <img src={NobleRootLogo} alt="" width={150} height={80} />
      </div>
      <ul className="ml-auto text-16 font-semibold ">
        <HiOutlineMenu size={"24px"} />
      </ul>
    </nav>
  );
};

export default NavBar;
