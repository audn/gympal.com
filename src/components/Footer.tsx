import Link from 'next/link';
import concat from '../lib/concat';
const icons = [
  {
    title: 'Discord',
    route: 'https://discord.gg/Q3dQj2Kqzm',
    icon: 'fa-brands fa-discord',
  },
  {
    title: 'Facebook',
    route: 'https://facebook.com/gympalcom',
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
function Footer() {
  return (
    <div className=" px-4">
      <footer className="flex max-w-6xl mx-auto justify-between w-full py-16">
        <div className="flex flex-col sm:flex-row justify-between items-center w-full">
          <span className="text-on-100 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Gympal &bull;{' '}
            <Link href="/privacy">Privacy</Link>
          </span>
          <div className="flex flex-col items-center md:flex-row space-y-2 md:space-y-0 md:space-x-5 mt-3 sm:mt-0">
            <a href="mailto:audun@gympal.com">
              <button className="bg-white self-start text-black px-3 text-sm flex items-center font-medium py-1 rounded-full">
                <i className="fa-solid fa-envelope mr-2" /> Contact
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
      </footer>
    </div>
  );
}

export default Footer;
