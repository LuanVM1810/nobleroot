import PhantomLogo from "../../assets/White Ghost_docs_nu.svg";
import MetaMaskLogo from "../../assets/images.png";

const ConnectWallet = () => {
  return (
    <div className="absolute left-0 text-purple-500 font-bold rounded-2xl top-[43px] w-full bg-white z-1">
      <ul className="py-2 px-2 flex flex-col gap-5">
        <li className="flex pl-2 rounded-2xl py-2 items-center gap-2 hover:bg-purple-300 hover:shadow-md hover:text-purple-900 transition-all duration-300">
          <img src={PhantomLogo} width={"30%"} className="rounded-full" />
          <p>Phantom</p>
        </li>
        <li className="flex pl-2 py-2 rounded-2xl items-center gap-2 hover:bg-purple-300 hover:shadow-md hover:text-purple-900 transition-all duration-300">
          <img src={MetaMaskLogo} width={"30%"} className="rounded-full" />
          <p>Metamask</p>
        </li>
      </ul>
    </div>
  );
};

export default ConnectWallet;
