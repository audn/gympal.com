import concat from '../../../concat';

function MealSizes() {
  const sizes = ['lower carbs', '+redbull', 'bulking', 'cutting for summer'];
  return (
    <div className="flex flex-wrap gap-2">
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
  );
}

export default MealSizes;
