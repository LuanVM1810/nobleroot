import { HiOutlineMenu } from "react-icons/hi";
import NobleRootLogo from "../../assets/NobleRoot (9).png";
import { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

type Props = {
  isMobile: boolean;
};
const NavBar = ({ isMobile }: Props) => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const openMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  useEffect(() => {
    if (!isMobile) {
      setIsOpenMenu(false);
    }
  }, [isMobile]);
  return (
    <nav className="flex items-center">
      <div className="flex items-center">
        {/* <div className="text-20 font-bold mr-2">NobleRoot</div>
        <FaBitcoin size={"24px"} color="#e9c463" className="cursor-pointer" /> */}
        <img src={NobleRootLogo} alt="" width={150} height={80} />
      </div>
      <ul className="ml-auto text-16 font-semibold relative">
        {isOpenMenu && isMobile ? (
          <IoCloseOutline
            onClick={openMenu}
            className="cursor-pointer"
            size={"24px"}
          />
        ) : !isOpenMenu && isMobile ? (
          <HiOutlineMenu
            onClick={openMenu}
            className="cursor-pointer"
            size={"24px"}
          />
        ) : (
          <>
            <ul className="lg:flex lg:gap-20 lg:text-16">
              <li className="menu-list">Trang chủ</li>
              <li className="menu-list">Membership</li>
              <NavLink to="signin">
                <li className="menu-list">Đăng nhập</li>
              </NavLink>
              <li className="ml-28 menu-list">Đăng kí</li>
            </ul>
          </>
        )}

        {isOpenMenu && (
          <div className="bg-white z-1 leading-7 text-black py-4 px-8 absolute right-4 rounded-lg">
            <ul>
              <li className="menu-list">Trang chủ</li>
              <li className="menu-list">Membership</li>
              <NavLink to="/signin">
                <li className="menu-list">Đăng nhập</li>
              </NavLink>
              <li className="menu-list">Đăng kí</li>
            </ul>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
