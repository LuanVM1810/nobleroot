const Courses = () => {
  return (
    <div className="mx-[70px] mb-[70px] flex flex-col gap-10 lg:flex-row">
      <div className="bg-purple-700 p-4 hover:translate-y-[-5%] transition-all duration-500 shadow-2xl rounded-2xl flex flex-col gap-4 items-center">
        <img
          src="https://cdn.corporatefinanceinstitute.com/assets/candlestick-patterns-1024x577.jpeg"
          className="rounded-xl"
        />
        <div className="my-5 flex flex-col items-center gap-4">
          <p className="font-bold text-20 text-center lg:text-26">
            Phân tích kĩ thuật
          </p>
          <p className="font-light text-center lg:text-20">
            Learn how to analyze charts and market trends to make informed
            trading decisions.
          </p>
          <button className="bg-pink-500 w-[60%] p-2 rounded-xl hover:shadow-md my-2 font-semibold">
            Enroll now
          </button>
        </div>
      </div>

      <div className="bg-purple-700 p-4 hover:translate-y-[-5%] transition-all duration-500 shadow-2xl rounded-2xl flex flex-col gap-4 items-center">
        <img
          src="https://coinedition.com/wp-content/uploads/2023/03/Top-10-AI-Crypto-Projects-to-Lookout-for-in-2023-2.jpg"
          className="rounded-xl"
        />
        <div className="my-5 flex flex-col items-center gap-4">
          <p className="font-bold text-20 text-center lg:text-26">
            Phân tích dự án
          </p>
          <p className="font-light text-center lg:text-20">
            Learn how to analyze charts and market trends to make informed
            trading decisions.
          </p>
          <button className="bg-pink-500 w-[60%] p-2 rounded-xl hover:shadow-md my-2 font-semibold">
            Enroll now
          </button>
        </div>
      </div>

      <div className="bg-purple-700 p-4 hover:translate-y-[-5%] transition-all duration-500 shadow-2xl rounded-2xl flex flex-col gap-4 items-center">
        <img
          src="https://www.spellbrand.com/wp-content/uploads/2022/05/onchain-primary-logo-design.webp"
          className="rounded-xl"
        />
        <div className="my-5 flex flex-col items-center gap-4">
          <p className="font-bold text-20 text-center lg:text-26">On-chain</p>
          <p className="font-light text-center lg:text-20">
            Dive into on-chain metrics to gain insights into blockchain activity
            and trends.
          </p>
          <button className="bg-pink-500 w-[60%] p-2 rounded-xl hover:shadow-md my-2 font-semibold">
            Enroll now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
