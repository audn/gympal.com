import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen relative bg-gradient-to-t from-types-50 to-types-100  flex flex-col items-center ">
      <main className={'max-w-6xl px-4 xs:px-10 text-center'}>
        <div className="max-w-3xl mx-auto pt-20">
          <div className="px-4 py-1 border bg-[#121111] text-[17px] rounded-full inline-flex mb-8 border-white/10">
            Launching early 2024
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-[140%] ">
            The improved app to effortlessly switch between your diet
            preferences.
          </h1>
          <button className="px-4 py-1 mt-6 items-center inline-flex text-black font-bold bg-white rounded-full">
            <a href="https://discord.gg/Q3dQj2Kqzm" target="_blank">
              <i className="fa-brands fa-discord mr-2" /> Join Discord
            </a>
          </button>

          <div className="mt-16 justify-center items-center fixed md:-bottom-20 inset-x-0 mx-auto  md:w-[834px] h-[411px] sm:h-[611px]">
            <Image
              src={`/phones.png`}
              layout="fill"
              objectFit={'cover'}
              //   width={834}
              //   height={611}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
