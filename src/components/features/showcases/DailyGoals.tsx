import concat from '../../../concat';

function Box({
  value,
  suffix,
  height,
  className,
}: {
  value: number;
  className: string;
  suffix?: string;
  height?: number;
}) {
  return (
    <div
      style={{ height: height ? `${height}%` : 'auto' }}
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
function DailyGoals() {
  const goals = [
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

  return (
    <div className="grid grid-cols-7 h-[170px] items-end  gap-3">
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
            style={{ height: `${(goal.calories / highestCal) * 100}%` }}
            className="text-center w-11 text-black flex items-center justify-end flex-col  "
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
            />
            <Box
              height={fatPercentage}
              className={`bg-types-fat`}
              value={fatGrams}
              suffix="F"
            />
            <Box
              height={carbohydratesPercentage}
              className={`bg-types-carbs`}
              suffix="C"
              value={carbsGrams}
            />
            <div className="text-sm mt-2 text-on-100">{goal.day}</div>
          </div>
        );
      })}
    </div>
  );
}

export default DailyGoals;
