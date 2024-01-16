const LineChart = () => {
  const data = [
    { x: 0, y: 88 },
    { x: 10, y: 87 },
    { x: 20, y: 88 },
    { x: 30, y: 89 },
    { x: 40, y: 87 },
  ];

  const padding = 5;
  const viewBoxWidth = 100;
  const viewBoxHeight = 50;

  const minX = Math.min(...data.map((p) => p.x)) - padding;
  const minY = Math.min(...data.map((p) => p.y)) - padding;
  const maxX = Math.max(...data.map((p) => p.x)) + padding;
  const maxY = Math.max(...data.map((p) => p.y)) + padding;

  const linePathData = data
    .map((point, index) => {
      const x = ((point.x - minX) / (maxX - minX)) * viewBoxWidth;
      const y =
        viewBoxHeight - ((point.y - minY) / (maxY - minY)) * viewBoxHeight;
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
    })
    .join(' ');

  const areaPathData = `${linePathData} L ${viewBoxWidth} ${viewBoxHeight} L 0 ${viewBoxHeight} Z`;

  return (
    <svg
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      className="w-full h-[152px] -mt-10"
    >
      <defs>
        <linearGradient id="gradient-fill" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(156,126,53,0.4)" />
          <stop offset="100%" stopColor="#2C2C2E" stopOpacity="0" />
        </linearGradient>
      </defs>

      <path d={areaPathData} fill="url(#gradient-fill)" />
      <path d={linePathData} fill="none" stroke="#FCC745" strokeWidth="0.5" />

      {data.map((point, index) => {
        const x = ((point.x - minX) / (maxX - minX)) * viewBoxWidth;
        const y =
          viewBoxHeight - ((point.y - minY) / (maxY - minY)) * viewBoxHeight;
        return (
          <circle
            key={index}
            cx={x}
            cy={y}
            r={1.5}
            fill="#1c1c1c"
            stroke="#fcc745"
            strokeWidth={1}
          />
        );
      })}
    </svg>
  );
};

function TrackGoals() {
  return (
    <div className="px-6 pt-6">
      <div className="from-[#2C2C2E] bg-gradient-to-b to-[#1C1C1E] -m-6 overflow-hidden justify-end rounded-t-3xl px-6 pt-4 relative">
        <h3 className="font-semibold mb-1 mt-2 text-[17px]">Track Weight</h3>
        <p className=" text-[#787880] text-[15px] font-medium">
          Keep track of your bodyweight!
        </p>
        <div className="flex flex-wrap gap-2 mt-3 -mx-6 ">
          <LineChart />
        </div>
      </div>
    </div>
  );
}

export default TrackGoals;
