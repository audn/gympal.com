const SectionThree = () => {
  return (
    <section className="grid items-center sm:grid-cols-2 gap-[5.75rem] py-12 sm:py-[6.25rem]">
      <div className="flex flex-col items-start gap-4">
        <div className="flex flex-col items-start gap-5">
          <h1 className="text-4xl text-left font-medium">
            Quick access to your Serving Sizes{' '}
          </h1>
          <p className="text-lg text-left font-normal">
            Easily create and manage different meal sizes with different
            portions or products.
          </p>
        </div>
      </div>
      <div className="grid-row-1">
        <div className=" sm:p-12 overflow-hidden pt-0 rounded-3xl grid-row-1">
          <img
            src="/phones/mealsizes-blurred.svg"
            alt="Phone"
            className="w-full object-top h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
