import Link from 'next/link';
import concat from '../concat';

function Footer() {
  const icons = [
    {
      title: 'Discord',
      route: 'https://discord.gg/Q3dQj2Kqzm',
      icon: 'fa-brands fa-discord',
    },
    {
      title: 'Facebook',
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
    <div className="grid-cols-3 gap-5 sm:grid mt-24">
      <div className="p-10 flex items-center justify-center bg-types-calories rounded-2xl">
        <img src="qr.png" className="w-28 rounded-xl" />
      </div>
      <Link href="/roadmap">
        <button className="p-10 w-full my-5 sm:my-0 col-span-2 flex text-start group relative overflow-hidden items-end justify-start bg-types-100 rounded-2xl">
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
        <div className="flex flex-col space-y-5 lg:space-y-0 sm:flex-row justify-between item-center w-full">
          <div className="flex flex-col">
            <span className="text-on-100 text-center sm:text-left">
              &copy; {new Date().getFullYear()} Gympal
            </span>
            <div className="flex flex-col items-center md:flex-row space-y-2 md:space-y-0 md:space-x-5 mt-3">
              <a href="mailto:audun@gympal.com">
                <button className="bg-white self-start text-black px-3 text-sm flex items-center font-bold py-1 rounded-full">
                  <i className="fa-solid fa-envelope mr-2" /> Get in touch
                </button>
              </a>
              <div className="flex flex-wrap space-x-2">
                {icons.map((x) => (
                  <a
                    href={x.route}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 text-on-100 hover:text-white rounded-full flex items-center justify-center transition ease-out duration-200 hover:bg-types-150"
                  >
                    <i className={concat('text-xl ', x.icon)} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <Link href={'#features'} className="">
            <button className="bg-types-fat w-full sm:w-auto self-center text-black px-4 text-center justify-center flex items-center font-bold py-2 rounded-xl">
              Join Waitlist
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
