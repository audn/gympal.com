import concat from '../../concat';

function Features() {
  const cols = [
    {
      title: 'Overview',
    },
    {
      title: 'Daily Goals',
    },
    {
      title: 'Meal Sizes',
    },
    {
      title: 'Customized Sizes',
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
            'bg-types-100 p-3 flex flex-col justify-between',
          )}
        >
          <div className="w-2 h-2 bg-red-500"></div>
          <div className="">
            <h3>{x.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Features;
