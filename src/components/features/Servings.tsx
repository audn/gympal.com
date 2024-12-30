const SectionThree = () => {
  return (
    <section className="grid items-center sm:grid-cols-2 gap-[5.75rem] py-[6.25rem]">
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
        {/* <ul className="grid grid-cols-1 gap-3 text-orange-500 py-2">
            <li className="flex items-start gap-3">
              <svg
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-1 min-w-[18px]"
              >
                <path
                  d="M1 6.76191L6.33333 12L17 1"
                  stroke="currentColor"
                  strokeWidth="2.25"
                />
              </svg>
              <span>Create multiple meal sizes</span>
            </li>
            <li className="flex items-start gap-3">
              <svg
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-1 min-w-[18px]"
              >
                <path
                  d="M1 6.76191L6.33333 12L17 1"
                  stroke="currentColor"
                  strokeWidth="2.25"
                />
              </svg>
              <span>Share sizes with anyone</span>
            </li>
            <li className="flex items-start gap-3">
              <svg
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-1 min-w-[18px]"
              >
                <path
                  d="M1 6.76191L6.33333 12L17 1"
                  stroke="currentColor"
                  strokeWidth="2.25"
                />
              </svg>
              <span>Custom Filtering</span>
            </li>
          </ul> */}
      </div>
      <div className="grid-row-1">
        <div className="flex items-center justify-center px-6 py-4">
          <img
            src="/phones/mealsizes-blurred.svg"
            alt="Phone"
            className="w-full object-bottom h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
