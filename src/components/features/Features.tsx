import React from 'react';
import concat from '../../concat';
import CustomSizes from './showcases/CustomSizes';
import DailyGoals from './showcases/DailyGoals';
import MealSizes from './showcases/MealSizes';
import Overview from './showcases/Overview';
import TrackGoals from './showcases/TrackGoals';

function Features() {
  const cols = [
    {
      title: 'Overview',
      description:
        'Get a  bird eye perspective of your history. No subscription needed.',
      component: <Overview />,
    },
    {
      title: 'Daily Goals',
      description: 'Set up daily macronutrient goals! ',
      component: <DailyGoals />,
    },

    {
      title: 'Customized Sizes',
      component: <CustomSizes />,
      description:
        'Why should you need to remember how many grams a slice of bread is?',
    },
    {
      title: 'Meal Sizes',
      description:
        'Create diffent variations of your meals, such as bulking or cutting. ',
      component: <MealSizes />,
    },
    {
      title: 'Track Weight',
      description: 'Get recommended products to reach your calorie goal!',
      component: <TrackGoals />,
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-5 overflow-hidden">
      {cols.map((x) => (
        <div
          key={x.title}
          className={concat(
            x.title == 'Overview' ? 'row-span-2 !justify-end' : '',
            x.title == 'Daily Goals' ? 'w-[354px]' : '',
            // x.title == 'Customized Sizes' ? 'h-[90%]' : '',
            // x.title == 'Track Weight' ? 'mb-6' : '',
            'bg-types-100 p-6 max-w-[350px] flex flex-col rounded-2xl text-start justify-between',
          )}
        >
          {x.component}
          {x.title !== 'Meal Sizes' && x.title !== 'Track Weight' ? (
            <div className="mt-4">
              <h3 className="font-semibold mb-1 mt-2 text-[17px]">{x.title}</h3>
              <p className=" text-[#787880] text-[15px] font-medium">
                {x.description}
              </p>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default React.memo(Features);
