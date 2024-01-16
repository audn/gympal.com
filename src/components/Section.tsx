import { useEffect, useState } from 'react';
import Phone from './Phone';
function Arrow({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg
        width="206"
        height="148"
        viewBox="0 0 206 148"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.1753 147.39C23.9568 126.866 54.2923 81.104 82.471 59.8206C112.876 36.7504 133.807 29.3459 182.593 24.7473C180.631 22.5371 178.83 20.9025 177.487 19.1706C175.871 17.2622 174.182 15.2285 173.08 13.0231C172.719 12.3963 173.225 10.5998 173.924 10.029C174.623 9.45813 176.416 9.59317 177.035 10.0715C182.824 14.7523 188.355 19.5816 194.088 24.4621C195.889 26.0966 195.986 28.0464 194.162 29.9354C186.961 36.7674 179.832 43.7246 172.43 50.5054C170.718 51.9952 168.114 52.8303 165.542 54.3152C164.487 47.7367 169.479 45.6906 172.026 42.3812C174.63 38.8722 177.853 35.8414 181.485 31.7384C166.758 30.8808 153.422 32.7301 140.384 36.5803C92.5253 50.5057 58.8664 81.3047 36.4162 124.687C33.5236 130.369 31.3063 136.329 28.6147 142.062C27.5619 143.505 26.6378 144.874 25.1753 147.39Z"
          fill="white"
        />
      </svg>
    </div>
  );
}
function Section({
  title,
  text,
  image,
  imageClass,
  color,
}: {
  title: string;
  text: string;
  image: string;
  color: string;
  imageClass?: string;
}) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (typeof window !== undefined) {
      setOffset(window.innerWidth);
    }
  }, []);

  return (
    <div className="md:grid grid-cols-2 md:bg-types-100 rounded-2xl overflow-hidden">
      <div className="relative md:p-12">
        <div className="text-on-100  flex flex-col md:inline gap-5">
          <h1 className="md:inline text-[30px] md:text-2xl text-white md:font-medium md:mr-2 leading-[35px]  md:leading-[40px]">
            {title}
          </h1>
          <h2 className="md:inline md:font-medium text-lg md:text-2xl leading-[27px] md:leading-[40px]">
            {text}
          </h2>
        </div>
        {title == 'Customizable meal sizes.' ? (
          <div className="hidden md:flex absolute bottom-40 right-[10%] z-20">
            <div className="px-4 py-2 bg-[#2C2C2E] flex-col  max-w-xs rounded-xl flex ">
              <div className="text-sm font-bold text-types-fat uppercase">
                <i className="fa-solid fa-info-circle mr-2" /> Bonus
              </div>
              <p className="text-on-100 text-base font-medium ">
                We have multiple shortcuts for a faster, simpler tracking
                experience.
              </p>
            </div>
          </div>
        ) : null}
      </div>
      <div
        style={{ backgroundColor: offset < 750 ? 'transparent' : `${color}` }}
        className={`mt-10 md:mt-0  rounded-3xl md:rounded-none`}
      >
        <div
          className={
            'bg-[#121212] md:bg-types-100 px-12 py-6  overflow-hidden md:overflow-visible !rounded-xl md:bg-inherit relative flex items-center flex-col justify-center'
          }
        >
          {title == 'Customizable meal sizes.' ? (
            <>
              <div className="hidden md:flex md:mb-12 md:gap-2 md:py-10 items-center justify-center flex-wrap md:w-[400px]"></div>
              <div className="relative">
                <Arrow className="hidden md:flex absolute z-10 -left-[65%] bottom-[30%]" />
                <Phone source={image} className={imageClass} />
              </div>
            </>
          ) : title == 'Present moment is history.' ? (
            <div className="md:p-10 flex items-center flex-col justify-center">
              <Phone source={image} className={imageClass} />
            </div>
          ) : (
            <div className="md:p-10 md:pb-24 pt-0  flex items-center flex-col justify-center">
              <Phone source={image} className={imageClass} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Section;
