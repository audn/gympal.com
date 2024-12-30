const SectionTwo = () => {
  return (
    <div className="max-w-6xl mx-auto ">
      <section className="grid items-center sm:grid-cols-2 gap-[5.75rem] py-[6.25rem] px-0 pb-[4.75rem]">
        <div className="bg-types-50 p-12 pb-0 rounded-3xl grid-row-1">
          <div className="flex items-center justify-center">
            <div className="relative w-[381px] h-[451px]">
              <img
                src="/phones/mid.svg"
                alt="Phone"
                className="w-full object-top h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4">
          {/* <p className="text-orange-500">Understandable</p> */}
          <div className="flex flex-col items-start gap-5">
            <h1 className="text-4xl text-left font-medium">
              More than just a Calorie tracker.
            </h1>
            <p className="text-lg text-left font-normal">
              Gympal does more than log your scanned foods—it provides
              actionable feedback tailored to your diet. Whether you’re aiming
              to hit specific goals or improve overall nutrition, Gympal guides
              you every step of the way.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionTwo;
