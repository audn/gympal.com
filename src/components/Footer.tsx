import Link from 'next/link';

function Footer() {
  return (
    <div className="grid-cols-3 gap-5  grid mt-24">
      <div className="p-10 flex items-center justify-center bg-types-calories rounded-2xl">
        <img src="qr.png" className="w-28 rounded-xl" />
      </div>
      <Link href="/roadmap">
        <button className="p-10 flex text-start group relative overflow-hidden items-end justify-start bg-types-100 rounded-2xl">
          <i className="fa-solid group-hover:scale-110 transition ease-out duration-200 fa-map mb-4 text-[14rem] -rotate-12 opacity-[3%]  text-on-100 absolute -right-10 -top-10" />
          <div className="text-types-calories font-medium text-2xl">
            <i className="fa-solid fa-map mb-4 text-4xl" />
            <h3 className="group-hover:underline transition ease-out duration-200">
              Roadmap and <br />
              planned features
            </h3>
          </div>
        </button>
      </Link>
      <Link href="/roadmap">
        <button className="p-10 flex group text-start group items-end justify-start overflow-hidden bg-types-100 rounded-2xl relative">
          <i className="fa-solid group-hover:scale-110 transition ease-out duration-200 fa-users mb-4 text-[14rem] -rotate-12 opacity-[3%]  text-on-100 absolute -right-10 -top-10" />
          <div className="text-white font-medium text-2xl">
            <i className="fa-solid fa-users mb-4 text-4xl" />
            <h3 className="group-hover:underline transition ease-out duration-200">
              Team{' '}
            </h3>
          </div>
        </button>
      </Link>
      <div className="col-span-3 p-10 flex items-center justify-center bg-types-100 rounded-2xl">
        <div className="flex justify-between item-center w-full">
          <div className="flex flex-col">
            <span className="text-on-100">
              &copy; {new Date().getFullYear()} Gympal, Inc
            </span>
            <div className="flex space-x-10 mt-3">
              <button className="bg-white text-black px-3 text-sm flex items-center font-bold py-1 rounded-full">
                <i className="fa-solid fa-envelope mr-2" /> Get in touch
              </button>
              <div className="flex flex-wrap space-x-2">icon</div>
            </div>
          </div>
          <div className="relative flex w-full max-w-sm items-center justify-center">
            <input
              className="bg-types-200 h-[50px] placeholder:text-white/80 w-full rounded-full px-6 py-2 "
              placeholder="Email"
            />
            <div className="absolute right-2">
              <button className="bg-[#FCC745] text-black px-4 text-sm flex items-center font-bold py-2 rounded-full">
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
