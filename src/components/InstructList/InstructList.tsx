const InstructList = () => {
  return (
    <div className={`absolute rounded-2xl bg-white top-6 w-[230px] z-1`}>
      <ul className="py-2 px-2 flex flex-col gap-5">
        <li className="instruct-list">Đăng kí Membership</li>
        <li className="instruct-list">Đăng kí tài khoản Binance</li>
        <li className="instruct-list">Nạp tiền</li>
        <li className="instruct-list">Lộ trình cho người mới</li>
      </ul>
    </div>
  );
};

export default InstructList;
