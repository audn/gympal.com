import { useEffect, useState } from 'react';
import { formatDate } from '../../../lib/utils';

function Overview() {
  const maxCalories = 2500;
  const maxProteinCalories = maxCalories * 0.3;
  const maxCarbsCalories = maxCalories * 0.5;
  const maxFatsCalories = maxCalories * 0.2;

  const NUM_DAYS = 15;

  const [caloriesData, setCaloriesData] = useState(
    Array.from({ length: NUM_DAYS }, () => ({
      proteinCalories: Math.random() * (2500 * 0.3 - 2000 * 0.3) + 2000 * 0.3,
      carbsCalories: Math.random() * (2500 * 0.5 - 2000 * 0.5) + 2000 * 0.5,
      fatsCalories: Math.random() * (2500 * 0.2 - 2000 * 0.2) + 2000 * 0.2,
    })),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCaloriesData((prevData) =>
        prevData.map((dayData) => ({
          proteinCalories: Math.max(
            Math.min(
              dayData.proteinCalories + (Math.random() * 20 - 10),
              maxProteinCalories,
            ),
            maxProteinCalories - 5 * 0.3,
          ),
          carbsCalories: Math.max(
            Math.min(
              dayData.carbsCalories + (Math.random() * 20 - 10),
              maxCarbsCalories,
            ),
            maxCarbsCalories - 5 * 0.5,
          ),
          fatsCalories: Math.max(
            Math.min(
              dayData.fatsCalories + (Math.random() * 20 - 10),
              maxFatsCalories,
            ),
            maxFatsCalories - 5 * 0.2,
          ),
        })),
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="from-types-175 bg-gradient-to-b to-types-150 -mr-6 pt-10 overflow-hidden justify-end rounded-bl-3xl h-[90%] rounded-tl-3xl relative">
      <div className="flex h-[90%] flex-col overflow-hidden right-5 absolute !-mt-10 -mr-2 pt-10 text-right justify-between">
        {[0, 1000, 2000, 3000].reverse().map((x) => (
          <div className="text-sm items-end z-10 text-on-100 flex" key={x}>
            <div className="space-x-2 pr-3 flex text-right w-full leading-[0.9px]">
              {Array.from({ length: 17 }).map((_, i) => (
                <div className="text-white/10" key={i}>
                  -
                </div>
              ))}
            </div>
            {x}
          </div>
        ))}
      </div>

      <div className="space-x-2 h-[90%] z-20 relative items-end pr-16 justify-end flex">
        {caloriesData.map((dayData, dayIndex) => {
          const proteinHeight =
            (dayData.proteinCalories / maxProteinCalories) * 100;
          const carbsHeight = (dayData.carbsCalories / maxCarbsCalories) * 100;
          const fatsHeight = (dayData.fatsCalories / maxFatsCalories) * 100;

          const now = new Date();
          const index = NUM_DAYS - 1 - dayIndex;

          const getDayLabel = () => {
            return new Date(now.setDate(now.getDate() - index));
          };
          const randomHeight = Math.floor(Math.random() * 21) + 80;

          return (
            <div
              className="flex flex-col justify-center items-center relative"
              style={{
                height: `${randomHeight}%`,
                transition: 'all 0.4s ease-in-out',
              }}
              key={`day-${dayIndex}`}
            >
              <div
                className="bg-types-fat w-2"
                style={{
                  height: `${proteinHeight}%`,
                }}
              />
              <div
                className="bg-types-carbs w-2"
                style={{
                  height: `${carbsHeight}%`,
                }}
              />
              <div
                className="bg-types-protein w-2"
                style={{
                  height: `${fatsHeight}%`,
                }}
              />
              {dayIndex === 0 || (dayIndex + 1) % 5 === 0 ? (
                <div
                  className="items-center flex-col justify-center flex z-50"
                  style={{
                    width: 50,
                    position: 'absolute',
                    bottom: -29,
                  }}
                >
                  <div className="w-[1px] h-[10px] flex bg-white/20" />
                  <div className="text-xs text-on-100">
                    {formatDate({
                      date: getDayLabel(),
                      options: { day: '2-digit', month: 'short' },
                    })}
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Overview;
