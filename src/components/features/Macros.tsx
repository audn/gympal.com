const SectionFour = () => {
  return (
    <section className="grid items-center sm:grid-cols-2 gap-[5.75rem] py-[6.25rem]">
      <div className="grid-row-1">
        <div className="bg-types-50 p-12 pb-0 rounded-3xl grid-row-1">
          <div className="flex items-center justify-center">
            {' '}
            <div className="relative w-[381px] h-[551px]">
              <img
                src="/phones/macro.svg"
                alt="Phone"
                className="w-full object-top h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-4">
        <div className="flex flex-col items-start gap-5">
          <h1 className="text-4xl text-left font-medium">
            Set daily macro targets.{' '}
          </h1>
          <p className="text-lg text-left font-normal">
            Easily adjust your macros for each day—lower carbs on rest days or
            increase protein on workout days to match your routine.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
