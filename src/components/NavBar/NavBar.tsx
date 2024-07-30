import { HiOutlineMenu } from "react-icons/hi";
import NobleRootLogo from "../../assets/NobleRoot (9).png";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
const NavBar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const openMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  return (
    <nav className="flex items-center">
      <div className="flex items-center">
        {/* <div className="text-20 font-bold mr-2">NobleRoot</div>
        <FaBitcoin size={"24px"} color="#e9c463" className="cursor-pointer" /> */}
        <img src={NobleRootLogo} alt="" width={150} height={80} />
      </div>
      <div className="ml-auto text-16 font-semibold relative">
        {isOpenMenu ? (
          <IoCloseOutline
            onClick={openMenu}
            className="cursor-pointer"
            size={"24px"}
          />
        ) : (
          <HiOutlineMenu
            onClick={openMenu}
            className="cursor-pointer"
            size={"24px"}
          />
        )}

        {isOpenMenu && (
          <div className="bg-white z-1 text-black py-2 px-4 absolute right-4 rounded-lg">
            <ul>
              <li>Courses</li>
              <li>Sign up</li>
              <li>Sign in</li>
              <li>Contact</li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
