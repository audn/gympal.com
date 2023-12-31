import concat from '../../concat';
import DailyGoals from './showcases/DailyGoals';

function Features() {
  const cols = [
    {
      title: 'Overview',
    },
    {
      title: 'Daily Goals',
      description:
        'Create different variations of your meals, such as bulking or cutting.',
      component: <DailyGoals />,
    },
    {
      title: 'Meal Sizes',
      description:
        'Create diffent variations of your meals, such as bulking or cutting. ',
    },
    {
      title: 'Customized Sizes',
      description:
        'Why should you need to remember how many grams a slice of bread is?',
    },
    {
      title: 'Goals',
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-5">
      {cols.map((x, i) => (
        <div
          key={x.title}
          className={concat(
            x.title == 'Overview' ? 'row-span-2' : '',
            x.title == 'Daily Goals' ? 'w-[354px]' : '',
            'bg-types-100 p-4 max-w-[350px] flex flex-col rounded-xl text-start justify-between',
          )}
        >
          {x.component}
          <div className="">
            <h3 className="font-semibold mb-1 mt-2">{x.title}</h3>
            <p className=" text-[#787880]">{x.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Features;
