import { useEffect, useState } from 'react';

const LineChart = () => {
  const initialData = [
    { x: 0, y: 88 },
    { x: 10, y: 87 },
    { x: 20, y: 88 },
    { x: 30, y: 89 },
    { x: 40, y: 87 },
    { x: 50, y: 87 },
    { x: 60, y: 87 },
  ];

  const [data, setData] = useState(initialData);

  useEffect(() => {
    let isAnimatingUp = true;

    const interval = setInterval(() => {
      setData((prevData) =>
        prevData.map((point) => {
          const newY = isAnimatingUp
            ? point.y + Math.random() * 4
            : point.y - Math.random() * 4;

          const foundPoint = initialData.find((p) => p.x === point.x);
          const maxY = foundPoint ? foundPoint.y + 4 : point.y;
          const minY = foundPoint ? foundPoint.y - 4 : point.y;

          return {
            ...point,
            y: Math.max(Math.min(newY, maxY || point.y), minY || point.y),
          };
        }),
      );

      isAnimatingUp = !isAnimatingUp;
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const padding = 2;
  const viewBoxWidth = 120;
  const viewBoxHeight = 40;
  // const viewBoxWidth = 100;
  // const viewBoxHeight = 50;

  const minX = Math.min(...data.map((p) => p.x)) - padding;
  const maxX = Math.max(...data.map((p) => p.x)) + padding;
  const minY = Math.min(...data.map((p) => p.y)) - padding;
  const maxY = Math.max(...data.map((p) => p.y)) + padding;

  const linePathData = data
    .map((point, index) => {
      const x = ((point.x - minX) / (maxX - minX)) * viewBoxWidth;
      const y =
        viewBoxHeight - ((point.y - minY) / (maxY - minY)) * viewBoxHeight;
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
    })
    .join(' ');

  const startX = ((data[0].x - minX) / (maxX - minX)) * viewBoxWidth;
  const endX =
    ((data[data.length - 1].x - minX) / (maxX - minX)) * viewBoxWidth;

  const areaPathData = `${linePathData} L ${endX} ${viewBoxHeight} L ${startX} ${viewBoxHeight} Z`;

  return (
    <svg
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      className="w-full h-[100px]"
    >
      <defs>
        <linearGradient id="gradient-fill" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(69,142,252,0.4)" />
          <stop offset="100%" stopColor="#2C2C2E" stopOpacity="0" />
        </linearGradient>
      </defs>

      <path
        d={areaPathData}
        fill="url(#gradient-fill)"
        style={{
          transition: 'd 0.4s ease-in-out',
        }}
      />
      <path
        d={linePathData}
        fill="none"
        stroke="#2F80ED"
        strokeWidth="1"
        style={{
          transition: 'd 0.4s ease-in-out',
        }}
      />

      {data.map((point, index) => {
        const x = ((point.x - minX) / (maxX - minX)) * viewBoxWidth;
        const y =
          viewBoxHeight - ((point.y - minY) / (maxY - minY)) * viewBoxHeight;
        return (
          <circle
            key={index}
            cx={x}
            cy={y}
            r={2.5}
            fill="#2C2C2E"
            stroke="#2F80ED"
            strokeWidth={1}
            style={{
              transition: 'cy 0.4s ease-in-out',
            }}
          />
        );
      })}
    </svg>
  );
};

function TrackGoals() {
  return (
    <div className="">
      <LineChart />
      {/* </div> */}
    </div>
  );
}

export default TrackGoals;
