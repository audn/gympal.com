import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { useState } from 'react';
import Waitlist from '../components/Waitlist';
import concat from '../concat';

function Roadmap() {
  const [platform, setPlatform] = useState<string>('');
  const platforms = [
    { name: 'iPhone', icon: 'fa-brands fa-apple' },
    { name: 'Android', icon: 'fa-brands fa-android' },
  ];
  return (
    <main className={'h-full '}>
      <NextSeo title="Gympal | Join beta" />
      <div className="px-6 min-h-screen flex items-center justify-center">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold ">Welcome to Beta!</h1>
          <p className="text-xl mt-6 text-white/60">Select platform below:</p>
          <div className="grid mt-10 grid-cols-2 gap-5">
            {platforms.map((x) => (
              <button
                onClick={() => setPlatform(x.name)}
                className={concat(
                  x.name == platform
                    ? 'border-brand-primary-100'
                    : 'border-transparent',
                  'rounded-xl p-5 bg-types-100 relative flex flex-col justify-center items-center border-2',
                )}
              >
                {x.name == platform ? (
                  <div className="absolute top-2 right-2 w-8 h-8 bg-brand-primary-100 rounded-full flex items-center justify-center ">
                    <i className=" fa-solid fa-check text-black" />
                  </div>
                ) : null}
                <i className={concat(x.icon, 'text-4xl mb-2 text-white')} />
                <h2 className="text-2xl font-bold">{x.name}</h2>
              </button>
            ))}
          </div>
          {platform !== 'Android' ? (
            <Link href="/ios">
              <button
                disabled={!platform}
                className="disabled:opacity-50 mt-10 font-medium text-lg px-4 py-2 rounded-full bg-white text-black"
              >
                Download from Testflight
              </button>
            </Link>
          ) : (
            <div className="text-center justify-center items-enter flex flex-col">
              <h2 className="text-on-100 md:text-lg mt-6 -mb-5">
                We need your email to invite you to the Android beta.
              </h2>
              <Waitlist />
              <p className="text-on-100 text-sm mt-6">
                Google requires us to have at least 20 testers for 14 days
                before we can release the app to everyone. Please enter your
                email so we can add you to our tester list. You'll receive an
                invite link within 12 hours.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Roadmap;
