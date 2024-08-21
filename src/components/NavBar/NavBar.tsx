import { HiOutlineMenu } from "react-icons/hi";
import NobleRootLogo from "../../assets/NobleRoot (9).png";
import { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { MdOutlineChevronRight } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import ConnectWallet from "../ConnectWallet/ConnectWallet";
import InstructList from "../InstructList/InstructList";

type Props = {
  isMobile: boolean;
};
const NavBar = ({ isMobile }: Props) => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [isOpenConnectWallet, setIsOpenConnectWallet] = useState(false);
  const [isOpenInstruct, setIsOpenInstruct] = useState(false);

  const openConnectWallet = () => {
    setIsOpenConnectWallet(true);
  };

  const closeConnectWallet = () => {
    setIsOpenConnectWallet(false);
  };

  const openInstruct = () => {
    setIsOpenInstruct(true);
  };

  const closeInstruct = () => {
    setIsOpenInstruct(false);
  };

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
        <img
          src={NobleRootLogo}
          alt=""
          width={150}
          height={80}
          className="lg:w-[200px]"
        />
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
            <ul className="lg:flex gap-10 lg:items-center lg:text-16 font-semibold">
              <li className="menu-list">Trang chủ</li>
              <li className="menu-list">Membership</li>
              <NavLink to="signin">
                <li className="menu-list">Đăng nhập</li>
              </NavLink>
              <li className="menu-list">Đăng kí</li>
              <li
                onMouseOver={openInstruct}
                onMouseLeave={closeInstruct}
                className="menu-list flex relative"
              >
                Hướng dẫn
                <IoIosArrowDown
                  size={"24px"}
                  className={`ml-2 ${
                    isOpenInstruct && `rotate-180`
                  } transition-all duration-300`}
                />
                {isOpenInstruct && <InstructList />}
              </li>
              <li
                onMouseOver={openConnectWallet}
                onMouseLeave={closeConnectWallet}
                className="ml-20 relative flex items-center hover:shadow-md transition-all duration-300 hover:bg-white menu-list rounded-2xl border-2 py-2 px-6"
              >
                Connect Wallet
                <IoIosArrowDown
                  size={"24px"}
                  className={`ml-2 ${
                    isOpenConnectWallet && `rotate-180`
                  } transition-all duration-300`}
                />
                {isOpenConnectWallet && <ConnectWallet />}
              </li>
            </ul>
          </>
        )}
      </ul>

      <div
        className={`fixed ${
          isOpenMenu === true ? `translate-x-[0]` : `translate-x-[100%]`
        }  bg-white z-1 w-[85%] md:w-[40%] lg:hidden transition-all duration-500 h-screen text-black py-6 pl-10 pr-4 right-0 top-0`}
      >
        <IoCloseOutline
          onClick={openMenu}
          className="cursor-pointer ml-auto"
          size={"30px"}
        />
        <ul className="py-10 font-semibold">
          <NavLink to="/">
            <li className="menu-list py-[8px] text-24 flex items-center">
              Trang chủ
              <MdOutlineChevronRight size={"30px"} className="ml-auto" />
            </li>
          </NavLink>
          <NavLink to="/">
            <li className="menu-list py-[8px] text-24 flex items-center">
              Membership
              <MdOutlineChevronRight size={"30px"} className="ml-auto" />
            </li>
          </NavLink>
          <NavLink to="/signin">
            <li className="menu-list py-[8px] text-24 flex items-center">
              Đăng nhập
              <MdOutlineChevronRight size={"30px"} className="ml-auto" />
            </li>
          </NavLink>
          <NavLink to="/">
            <li className="menu-list py-[8px] text-24 flex items-center">
              Đăng kí
              <MdOutlineChevronRight size={"30px"} className="ml-auto" />
            </li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
