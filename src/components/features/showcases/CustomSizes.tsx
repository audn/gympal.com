function CustomSizes() {
  return (
    <div className=" mt-3 -mr-10">
      <ul className="mb-5 ml-4 rounded-xl overflow-hidden ">
        <li className="h-[44px] items-center flex  bg-[#212121] px-4 py-2 shadow-lg">
          Grams (g)
        </li>
      </ul>
      <ul className="rounded-xl overflow-hidden -mt-7 shadowww">
        <li className="h-[44px] items-center flex border-b font-medium border-white/5 bg-[#212121] px-4 py-2 shadow-lg">
          <i className="fa-solid fa-angle-down mr-3 text-lg" /> My Sizes
        </li>
        <li className="h-[44px] items-center flex bg-[#212121] px-4 py-2 shadow-lg">
          <i className="fa-solid fa-check mr-3 text-lg" /> 1 Slice - 61g
        </li>
      </ul>
    </div>
  );
}

export default CustomSizes;
