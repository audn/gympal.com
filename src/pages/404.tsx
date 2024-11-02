import { NextSeo } from 'next-seo';
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="min-h-screen bg-types-50  flex flex-col items-center justify-center">
      <main className={'container text-center'}>
        <NextSeo title="Page not found" />
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold">404 page not found.</h1>
          <Link href="/">
            <button className="disabled:opacity-50 mt-10 font-medium text-lg px-4 py-2 rounded-full bg-white text-black">
              Go back to home
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
