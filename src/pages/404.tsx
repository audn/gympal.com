import { NextSeo } from 'next-seo';

export default function Custom404() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-types-50 to-types-100  flex flex-col items-center justify-center">
      <main className={'container text-center'}>
        <NextSeo title="Page not found" />
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold">
            The improved app to effortlessly switch between your diet
            preferences.
          </h1>
        </div>
      </main>
    </div>
  );
}
