import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

const features = [
  {
    category: 'Diet',
    items: [
      {
        id: 'set-daily-macro-goals',
        title: 'Set Daily Macro Goals',
        status: <Available />,
        description:
          'Easily adjust your macros for each day—lower carbs on rest days or increase protein on workout days to match your routine.',
      },
      {
        id: 'create-meal-sizes',
        title: 'Create Meal Sizes',
        status: <Available />,
        description:
          'Quickly set up and manage meals with varied portions and products.',
      },
      {
        id: 'custom-serving-sizes',
        title: 'Custom Serving Sizes',
        status: <Available />,
        description: 'Define serving sizes for any global products.',
      },
      {
        id: 'adjust-meal-calories',
        title: 'Adjust Meal Calories',
        status: <Available />,
        description:
          'Enter your target calories, and the meal adjusts automatically.',
      },
      {
        id: 'track-body-weight',
        title: 'Track Body Weight',
        status: <NotAvailable />,
        description:
          'Monitor weight changes, capture progress photos, and analyze trends.',
      },
      {
        id: 'hide-calories',
        title: 'Hide Calories',
        status: <NotAvailable />,
        description:
          'Hide all calorie-related information, including total calories consumed and calories in individual products, to focus exclusively on tracking macros.',
      },

      {
        id: 'body-metrics',
        title: 'Body Metrics',
        status: <NotAvailable />,
        description: 'Log body measurements and visualize progress over time.',
      },

      {
        id: 'set-a-coach',
        title: 'Set a Coach',
        status: <PlannedFeature />,
        description:
          'Assign a real person as your coach. They can track your progress, provide feedback, and create custom meal plans.',
      },
      {
        id: 'build-your-own-diet',
        title: 'Build Your Own Diet',
        status: <PlannedFeature />,
        description:
          'Create a diet plan tailored to your needs with a simple, intuitive diet builder.',
      },
      {
        id: 'dynamic-diet-plans',
        title: 'Dynamic Diet Plans',
        status: <PlannedFeature />,
        description:
          'Gympal learns and adapts to your needs, offering a truly personalized experience.',
      },
      {
        id: 'hotel-friendly-features',
        title: 'Hotel-Friendly Features',
        status: <PlannedFeature />,
        description:
          'Find nearby hotels with breakfast options, gym details, and other fitness-related amenities to stay on track while traveling.',
      },
      {
        id: 'restaurant-finder',
        title: 'Restaurant Finder',
        status: <PlannedFeature />,
        description:
          'Locate nearby restaurants and view their menus, complete with detailed macro information.',
      },
      {
        id: 'macro-filler',
        title: 'Macro Filler',
        status: <PlannedFeature />,
        description:
          'Get suggestions for snacks or small meals to help you meet your macro targets.',
      },
    ],
  },
  {
    category: 'Workouts',
    items: [
      {
        id: 'workout-tracker',
        title: 'Workout Tracker',
        status: <PlannedFeature />,
        description: 'Log and track your workouts.',
      },
      {
        id: 'search-all-gyms',
        title: 'Search All Gyms',
        status: <PlannedFeature />,
        description: `Find local gyms, check their available equipment, and have your exercise program adapt to what's available.`,
      },
      {
        id: 'set-an-active-gym-pal',
        title: 'Set an Active Gym Pal',
        status: <PlannedFeature />,
        description: `Assign one person to track the workout session for a group, and sync the data to everyone's accounts after.`,
      },
      {
        id: 'your-personal-trainer',
        title: 'Your Personal Trainer',
        status: <PlannedFeature />,
        description:
          'Gympal adapts to your unique fitness and workout needs, acting as your personal trainer.',
      },
      {
        id: 'linear-but-for-workouts',
        title: 'linear but for workouts',
        status: <PlannedFeature />,
        description: 'Desktop interface for all in-app features.',
      },
    ],
  },
];
function Early() {
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
        title="Gympal: Here's What to Expect"
        description="Gympal is an early-stage app, and we're working hard to make it even better for you."
      />

      <article className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <time className="text-base">3 Jan, 2025</time>
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
          Gympal: Here's What to Expect
        </h1>

        <section>
          <p>
            Today, I am happy to share what I have been working on for the past
            year, and invite you to join me on this journey.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-medium tracking-tight ">
            Why I Built Gympal
          </h2>

          <p>
            All the big calorie-tracking apps felt like note-taking apps. They
            were just places to write down what you ate, like a digital diary,{' '}
            <strong>
              but I was more interested in the process of figuring out what to
              eat next.
            </strong>
          </p>
          {/* <p>
          It's more natural for most people to figure out what to eat on their
            own, whether by trial and error, or reading up on "top 10 best foods
            for {'<insert goal>'}."
            <br /> Others might turn to a personal trainer for tailored advice.
            A personal trainer is great because they can customize
            recommendations to you specifically, taking into account things like
            your gym equipment, foods you dislike, and previous injuries. But
            why couldn't I tell an app these things instead?{' '}
            <strong>
              There just weren't any apps offering that level of customization.
            </strong>
          </p> */}
          <p>
            It feels more natural to find out what to eat on my own, or through
            a personal trainer, since they can tailor recommendations to me
            specifically, taking into account things like my gym equipment,
            foods I disliked, and previous injuries, but why couldn't I tell an
            app these things instead?{' '}
            <strong>
              There just weren't any apps offering that level of customization.
            </strong>
          </p>

          <p>
            I quickly realized how frustrating it was to rely on fitness apps
            that treated everyone the same. Imagine opening TikTok without a
            personalized For You page—it would't satisfy me.
          </p>

          <p>
            Another pain point was seasonal goals. Transitioning from bulking to
            cutting meant manually adjusting every entry to lower calories while
            maintaining macros. It was tedious and time-consuming.
          </p>
          <p>
            And then came the leftover calorie problem. If I had 700 kcal left
            on a Saturday, I was unsure of what to eat. If I was only used to
            making the same meals over and over, it felt like game-over for me.
            Why couldn't an app just suggest something tailored to my needs?
          </p>
          <p>
            That's why I built Gympal—a simple, flexible app that helps you
            manage your diet, experiment, and discover what works for you.
          </p>
        </section>
        <section>
          <h2 className="!mt-12 text-2xl font-medium tracking-tight mb-8">
            What Gympal Offers as of Today
          </h2>
          <p>
            It's important to note that this is just the beginning.
            <br /> We're slowly moving towards the vision of Gympal, and each
            update gets us closer to that goal.
          </p>
          <p>
            Note: These features are an addition to the standard features of any
            calorie tracking apps.
          </p>

          <ul className="list-disc pl-6  text-white/80">
            {features.map(({ category, items }) => (
              <div key={category}>
                <h4 className="mt-10  -ml-6 text-xl mb-6  text-white">
                  {category} features:
                </h4>
                {category == 'Workouts' ? (
                  <div className="-mt-3 mb-6 bg-types-200/60 p-3 text-base">
                    Gympal is currently focused on nutrition, but tracking
                    exercises is on our roadmadp.
                  </div>
                ) : null}
                <div className="space-y-5">
                  {items.map(({ id, title, status, description }) => (
                    <li key={title} id={id} className="scroll-mt-20">
                      <a
                        href={`#${id}`}
                        className="font-medium text-white hover:underline"
                      >
                        {title}
                      </a>{' '}
                      {status}
                      <p className="ml-2">{description}</p>
                    </li>
                  ))}
                </div>
              </div>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="!mt-12 text-2xl font-medium tracking-tight mb-8">
            Who Is Gympal For?
          </h2>
          <p>
            Gympal is for anyone who wants more control over their diet. Maybe
            you're into fitness, have specific dietary needs, or just want to
            try something new.
          </p>
        </section>

        {/* <section>
          <h2 className="!mt-12 text-2xl font-medium tracking-tight mb-8">
            What Sets Gympal Apart
          </h2>
          <p>
            Unlike other calorie tracking apps, which are primarily food
            loggers, Gympal offers a dynamic diet management experience. We're
            not just about tracking what you eat; we provide a platform that
            actively assists in shaping your diet. This means giving you the
            tools to easily adjust meal plans and experiment with your diet in a
            way that aligns with your personal health goals. Whether it's weight
            management, muscle gain, or nutritional balance, Gympal is designed
            to be your partner in dietary exploration and personalization.
          </p>
        </section> */}

        {/* <section>
          <h2 className="!mt-12 text-2xl font-medium tracking-tight mb-8">
            Building in Public
          </h2>
          <p>
            Gympal is being built with full transparency. That means I'm sharing
            the process, listening to community feedback, and making changes
            based on what's needed.
          </p>
        </section> */}
        <section>
          <h2 className="!mt-12 text-2xl font-medium tracking-tight mb-8">
            Final Thoughts
          </h2>
          <p>
            Thanks for being part of Gympal's journey. This is just the
            beginning, and I can't wait to see what we build together.
          </p>
        </section>
        <footer>
          <hr className="border-white/10 mb-6 w-[100px]" />
          <ol className="list-decimal text-white/50 list-inside">
            <li>
              It's important to note that Gympal is a hobby project, maintained
              by just one person.
            </li>
            <li>
              Some features might not work perfectly, so occasional bugs are
              expected.
            </li>
          </ol>
        </footer>
      </article>
    </motion.div>
  );
}

export default Early;

function NotAvailable() {
  return (
    <span className="bg-yellow-400 text-black text-sm font-medium px-1.5 py-0.5 rounded ml-2">
      Coming Soon
    </span>
  );
}
function Available() {
  return (
    <span className="bg-green-400 text-black text-sm font-medium px-1.5 py-0.5 rounded ml-2">
      Available
    </span>
  );
}
function PlannedFeature() {
  return (
    <span className="bg-blue-400 text-black text-sm font-medium px-1.5 py-0.5 rounded ml-2">
      Planned
    </span>
  );
}
