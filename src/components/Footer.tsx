import Link from 'next/link';
import concat from '../concat';

function Footer() {
  const icons = [
    {
      title: 'Instagram',
      route: 'https://facebook.com/trygympal',
      icon: 'fa-brands fa-facebook',
    },
    {
      title: 'Instagram',
      route: 'https://instagram.com/gympalcom',
      icon: 'fa-brands fa-instagram',
    },
    {
      title: 'Twitter',
      route: 'https://twitter.com/gympalcom',
      icon: 'fa-brands fa-twitter',
    },
  ];
  return (
    <div className="grid-cols-3 gap-5  grid mt-24">
      <div className="p-10 flex items-center justify-center bg-types-calories rounded-2xl">
        <img src="qr.png" className="w-28 rounded-xl" />
      </div>
      <Link href="/roadmap">
        <button className="p-10 col-span-2 flex text-start group relative overflow-hidden items-end justify-start bg-types-100 rounded-2xl">
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

      <div className="col-span-3 p-6 md:p-10 flex items-center justify-center bg-types-100 rounded-2xl">
        <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row justify-between item-center w-full">
          <div className="flex flex-col">
            <span className="text-on-100">
              &copy; {new Date().getFullYear()} Gympal, Inc
            </span>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-5 mt-3">
              <button className="bg-white self-start text-black px-3 text-sm flex items-center font-bold py-1 rounded-full">
                <i className="fa-solid fa-envelope mr-2" /> Get in touch
              </button>
              <div className="flex flex-wrap space-x-2">
                {icons.map((x) => (
                  <button className="w-10 h-10 text-on-100 hover:text-white rounded-full flex items-center justify-center transition ease-out duration-200 hover:bg-types-150">
                    <i className={concat('text-xl ', x.icon)} />
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="relative flex w-full lg:max-w-sm items-center justify-center">
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
