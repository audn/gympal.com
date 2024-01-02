import { formatDate } from '../../../utils';

function Overview() {
  // Define the maximum calories for scaling the bar heights
  const maxCalories = 2500;
  const maxProteinCalories = maxCalories * 0.3;
  const maxCarbsCalories = maxCalories * 0.5;
  const maxFatsCalories = maxCalories * 0.2;

  const NUM_DAYS = 25;

  return (
    <div className="from-[#2C2C2E] bg-gradient-to-b to-[#1C1C1E] -mr-6  pt-10 overflow- justify-end rounded-bl-3xl h-full rounded-tl-3xl relative">
      <div className="flex w-[90%]  items-end h-full flex-col overflow-hidden right-5 absolute !-mt-10 -mr-2  pt-10 text-right justify-between">
        {[0, 1000, 2000, 3000].reverse().map((x) => (
          <div className="text-sm items-end z-10 text-on-100 flex">
            <div className="space-x-2 pr-3 flex text-right w-full leading-[0.9px]">
              {Array.from({ length: 55 }).map((_, i) => (
                <div className="text-white/10 " key={i}>
                  -
                </div>
              ))}
            </div>
            {x}
          </div>
        ))}
      </div>

      <div className="space-x-2 z-20 relative items-end h-full pr-16 justify-end flex overflow-x-clip">
        {Array.from({ length: NUM_DAYS }).map((_, dayIndex) => {
          const randomCalories =
            Math.floor(Math.random() * (2500 - 2000 + 1)) + 2000;

          const proteinCalories = randomCalories * 0.3;
          const carbsCalories = randomCalories * 0.5;
          const fatsCalories = randomCalories * 0.2;

          const proteinHeight = (proteinCalories / maxProteinCalories) * 100;
          const carbsHeight = (carbsCalories / maxCarbsCalories) * 100;
          const fatsHeight = (fatsCalories / maxFatsCalories) * 100;

          const map = {
            0: 'bg-types-protein',
            1: 'bg-types-carbs',
            2: 'bg-types-fat',
          };
          const randomHeight = Math.floor(Math.random() * 21) + 80;

          const now = new Date();
          const index = NUM_DAYS - 1 - dayIndex;

          const getDayLabel = () => {
            return new Date(now.setDate(now.getDate() - index));
          };
          return (
            <>
              <div
                style={{ height: `${randomHeight}%` }}
                className="flex flex-col  relative "
                key={`day-${dayIndex}`}
              >
                <div
                  className={`${map[2]} w-2`}
                  style={{ height: `${proteinHeight}%` }}
                >
                  &nbsp;
                </div>
                <div
                  className={`${map[1]} w-2`}
                  style={{ height: `${carbsHeight}%` }}
                >
                  &nbsp;
                </div>
                <div
                  className={`${map[0]} w-2`}
                  style={{ height: `${fatsHeight}%` }}
                >
                  &nbsp;
                </div>
                {dayIndex == 0 || (dayIndex + 1) % 5 == 0 ? (
                  <div
                    className=" text-sm z-50"
                    style={{
                      alignItems: 'center',
                      //     height: 65,
                      width: 50,
                      position: 'absolute',
                      bottom: -25,
                    }}
                  >
                    <div className={'w-[1px] h-[10px] mb-2 bg-red-500'} />

                    {formatDate({
                      date: getDayLabel(),
                      options: { day: '2-digit', month: 'short' },
                    })}
                  </div>
                ) : null}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Overview;
