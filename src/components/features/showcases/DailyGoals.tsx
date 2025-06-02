import { useEffect, useState } from 'react';
import concat from '../../../lib/concat';

function Box({
  value,
  suffix,
  height,
  style,
  className,
}: {
  value: number;
  className: string;
  suffix?: string;
  style?: React.CSSProperties;
  height?: number;
}) {
  return (
    <div
      style={{ height: height ? `${height}%` : 'auto', ...style }}
      className={concat(
        className,
        'p-1 rounded mt-1 w-[40px] flex items-center justify-center text-[13px] font-medium',
      )}
    >
      {value.toFixed(0)}
      {suffix}
    </div>
  );
}

export default function DailyGoals() {
  return (
    <>
      <h3 className="font-medium  text-[17px]">Strategies</h3>
      <p className=" text-[#787880] text-[15px]">
        Set up daily macronutrient goals!
      </p>
      <div className="h-full mt-4">
        <Chart />
      </div>
    </>
  );
}

function Chart() {
  const initialGoals = [
    {
      day: 'M',
      calories: 2400,
      protein: 30,
      fat: 25,
      carbs: 45,
    },
    {
      day: 'T',
      calories: 1400,
      protein: 30,
      fat: 25,
      carbs: 45,
    },
    {
      day: 'W',
      calories: 2400,
      protein: 30,
      fat: 25,
      carbs: 45,
    },
    {
      day: 'T',
      calories: 2400,
      protein: 30,
      fat: 25,
      carbs: 45,
    },
    {
      day: 'F',
      calories: 2000,
      protein: 30,
      fat: 25,
      carbs: 45,
    },
    {
      day: 'S',
      calories: 2400,
      protein: 30,
      fat: 25,
      carbs: 45,
    },
    {
      day: 'S',
      calories: 2400,
      protein: 30,
      fat: 25,
      carbs: 45,
    },
  ];

  const [goals, setGoals] = useState(initialGoals);

  useEffect(() => {
    const interval = setInterval(() => {
      setGoals((prevGoals) =>
        prevGoals.map((goal) => ({
          ...goal,
          calories: Math.max(
            Math.min(goal.calories + Math.random() * 200 - 100, 2500),
            1200,
          ),
          protein: Math.max(
            Math.min(goal.protein + Math.random() * 5 - 2.5, 40),
            20,
          ),
          fat: Math.max(Math.min(goal.fat + Math.random() * 5 - 2.5, 35), 15),
          carbs: Math.max(
            Math.min(goal.carbs + Math.random() * 5 - 2.5, 55),
            35,
          ),
        })),
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-7 h-[inherit] items-end ">
      {goals.map((goal, index) => {
        const fatCalories = goal.fat * 9;
        const proteinCalories = goal.protein * 4;
        const carbsCalories = goal.carbs * 4;

        const totalCalories = fatCalories + proteinCalories + carbsCalories;

        const fatPercentage = (fatCalories / totalCalories) * 100;
        const proteinPercentage = (proteinCalories / totalCalories) * 100;
        const carbohydratesPercentage = (carbsCalories / totalCalories) * 100;

        const fatGrams = ((goal.fat / 100) * goal.calories) / 9;
        const proteinGrams = ((goal.protein / 100) * goal.calories) / 4;
        const carbsGrams = ((goal.carbs / 100) * goal.calories) / 4;

        const highestCal = goals?.reduce((pre, cur) => {
          return pre.calories > cur.calories ? pre : cur;
        }).calories;

        return (
          <div
            key={index}
            style={{
              height: `${(goal.calories / highestCal) * 100}%`,
              transition: 'all 0.4s ease-in-out',
            }}
            className="text-center w-11 text-black flex items-center justify-end flex-col"
          >
            <Box
              className={`bg-types-calories !w-auto !px-1 mb-1 !py-[1px] font-medium !text-[12px]`}
              value={goal.calories}
            />
            <Box
              height={proteinPercentage}
              suffix="P"
              className={`bg-types-protein`}
              value={proteinGrams}
              style={{
                height: `${proteinPercentage}%`,
                transition: 'height 0.4s ease-in-out',
              }}
            />
            <Box
              height={fatPercentage}
              className={`bg-types-fat`}
              value={fatGrams}
              suffix="F"
              style={{
                height: `${fatPercentage}%`,
                transition: 'height 0.4s ease-in-out',
              }}
            />
            <Box
              height={carbohydratesPercentage}
              className={`bg-types-carbs`}
              suffix="C"
              value={carbsGrams}
              style={{
                height: `${carbohydratesPercentage}%`,
                transition: 'height 0.4s ease-in-out',
              }}
            />
            <div className="text-sm mt-2 text-on-100">{goal.day}</div>
          </div>
        );
      })}
    </div>
  );
}
