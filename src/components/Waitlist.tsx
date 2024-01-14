function Waitlist() {
  return (
    <div className="max-w-md mx-auto py-24 text-center">
      <h1 className="text-white font-semibold text-5xl leading-[52px]">
        Join the waitlist!
      </h1>
      <p className="text-on-100 text-lg mt-6">
        Launching Public Beta in the First Quarter of 2024
      </p>
      <div className="space-y-3 mt-10 max-w-xs mx-auto items-center">
        <input
          className="bg-types-100 h-[44px] outline-none w-full  rounded-xl px-6 py-2"
          placeholder="Email"
          type="email"
        />
        <button className="bg-types-fat w-full text-black px-4 text-center justify-center flex items-center font-bold py-2 rounded-xl">
          Join The Waitlist
        </button>
      </div>
    </div>
  );
}

export default Waitlist;
