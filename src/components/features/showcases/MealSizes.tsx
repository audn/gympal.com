import concat from '../../../concat';

function MealSizes() {
  const sizes = ['lower carbs', '+redbull', 'bulking', 'cutting for summer'];
  return (
    <div className="px-6 pt-6">
      <div className="from-[#2C2C2E] bg-gradient-to-b to-[#1C1C1E] -m-6 overflow-hidden justify-end rounded-t-3xl p-5 py-5 relative">
        <div className="flex flex-wrap gap-2 ">
          {sizes.map((x, i) => (
            <button
              key={x}
              className={concat(
                i == 0 ? 'bg-white text-black' : 'bg-[#3A3A3C] text-white',
                'px-3 py-1 rounded-full  ',
              )}
            >
              {i == 0 ? <i className="fa-solid fa-star" /> : null} {x}
            </button>
          ))}
        </div>

        <div className="mt-6">
          <h3 className="font-semibold mb-1 mt-2 text-[17px]">Meal Sizes</h3>
          <p className=" text-[#787880] text-[15px] font-medium">
            Create diffent variations of your meals, such as bulking or cutting.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MealSizes;
