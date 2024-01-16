import { useState } from 'react';

function TailwindBrekapoint() {
  const [isOpen, setOpen] = useState<boolean>(true);
  const toggle = () => setOpen(!isOpen);
  if (isOpen) {
    return (
      <button
        onClick={toggle}
        className="fixed z-50 px-2 py-1 text-white border rounded-md bottom-2 right-2 border-brand-primary-150 bg-brand-primary-100"
      >
        <h3 className="hidden xxs:flex xs:!hidden">xxs</h3>
        <h3 className="hidden sm:!hidden xs:flex">xs</h3>
        <h3 className="hidden sm:flex md:!hidden">sm</h3>
        <h3 className="hidden md:flex lg:!hidden">md</h3>
        {/* <h3 className="hidden lg:!hidden md-plus:flex">md-plus</h3> */}
        <h3 className="hidden lg:flex xl:!hidden">lg</h3>
        {/* <h3 className="hidden xl:!hidden lg-plus:flex">lg-plus</h3> */}
        <h3 className="hidden xl:flex 1xl:!hidden">xl</h3>
        <h3 className="hidden 2xl:!hidden 1xl:!flex">1xl</h3>
        {/* <h3 className="3xl:!hidden hidden 2xl:flex">2xl</h3> */}
        <h3 className="hidden 3xl:flex">3xl</h3>
      </button>
    );
  } else return <></>;
}

export default TailwindBrekapoint;
