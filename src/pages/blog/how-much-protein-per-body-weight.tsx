'use client';

import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

function ProteinCalculatorPage() {
  return (
    <motion.div
      animate="enter"
      className="max-w-[48.75rem] mx-auto"
      exit="exit"
      initial="initial"
      variants={{
        initial: { opacity: 0, y: 30 },
        enter: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          },
        },
        exit: {
          opacity: 0,
          transition: {
            duration: 0.2,
            ease: [0.4, 0, 0.2, 1],
          },
        },
      }}
    >
      <NextSeo
        title="How Much Protein Do You Need Per Body Weight?"
        description="Curious about your daily protein needs? Learn how many grams of protein you need per kilogram or pound of body weight based on your fitness goals."
        canonical="https://gympal.com/blog/how-much-protein-per-body-weight"
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'protein intake, daily protein, body weight protein, nutrition, fitness goals',
          },
          {
            name: 'author',
            content: 'Audun Hilden',
          },
          {
            property: 'article:published_time',
            content: '2025-06-02T12:00:00Z',
          },
          {
            property: 'article:modified_time',
            content: '2025-06-02T12:00:00Z',
          },
          {
            property: 'article:section',
            content: 'Health & Fitness',
          },
          {
            property: 'article:tag',
            content: 'protein',
          },
          {
            property: 'article:tag',
            content: 'nutrition',
          },
          {
            property: 'article:tag',
            content: 'fitness goals',
          },
        ]}
        openGraph={{
          images: [
            {
              url: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
          site: '@gympalcom',
          handle: '@audunhilden',
        }}
      />

      <article className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <time className="text-base">2 Jun, 2025</time>
          <span>by</span>
          <Link
            href="https://x.com/audunhilden"
            target="_blank"
            rel="noreferrer noopener"
          >
            <button className="hover:text-white transition-all duration-200 ease-out">
              <img
                src="https://pbs.twimg.com/profile_images/1569879536581345283/YgoUF5HT_400x400.png"
                className="w-6 h-6 rounded-full mr-1 inline"
              />
              Audun Hilden
            </button>
          </Link>
        </div>

        <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-10">
          How Much Protein Do You Need Per Body Weight?
        </h1>

        <section>
          <p>
            Protein is a vital nutrient that helps build and maintain muscle,
            repair tissues, and support immune function. But how much do you
            really need each day? The answer is simple: it depends on your{' '}
            <strong>body weight</strong> and <strong>activity level</strong>.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-medium tracking-tight mb-4">
            Recommended Daily Protein Intake
          </h2>
          <p>
            The <strong>standard guideline</strong> for adults is:
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li>
              <strong>0.8 grams</strong> of protein per kilogram of body weight
            </li>
            <li>
              <strong>0.36 grams</strong> per pound of body weight
            </li>
          </ul>
          <p className="mt-2">
            This is considered the <strong>minimum</strong> to meet basic
            nutritional needs — not the optimal amount for athletes or older
            adults.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-medium tracking-tight mb-4">
            How to Calculate Your Protein Needs
          </h2>
          <p>Use this formula based on your body weight:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>
              <strong>In pounds</strong>: <code>weight (lbs) × 0.36</code> =
              grams of protein per day
            </li>
            <li>
              <strong>In kilograms</strong>: <code>weight (kg) × 0.8</code> =
              grams of protein per day
            </li>
          </ul>
        </section>

        <div className="my-12 flex justify-center">
          <Link href="/tools/protein-calculator">
            <button className="bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-black font-bold py-4 px-8 rounded-full text-lg shadow-lg shadow-green-400/25 transition-all duration-200 transform hover:scale-105 flex items-center gap-3">
              <div className="w-8 h-8 bg-orange-400 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">P</span>
              </div>
              Try Our Protein Calculator
            </button>
          </Link>
        </div>

        <section className="mt-8">
          <h2 className="text-2xl font-medium tracking-tight mb-4">
            Conclusion
          </h2>
          <p>
            To support your health, aim for{' '}
            <strong>0.36g per pound (0.8g per kg)</strong> of protein each day.
            If you're physically active, older, or trying to build muscle,
            consider increasing that to up to <strong>2g per kg</strong>. It's
            not just how much you eat, but also how consistently you spread it
            across meals.
          </p>
        </section>
      </article>
    </motion.div>
  );
}

export default ProteinCalculatorPage;
