import { getMeal, Meal } from '@/src/hooks/meals';
import { Star } from 'lucide-react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';

function MealCard({ data }: { data: Meal['sizes'][number] }) {
  let totalMacros = { calories: 0, protein: 0, carbohydrates: 0, fat: 0 };
  const entries = data?.entries;
  if (entries && entries.length > 0) {
    totalMacros = entries.reduce(
      (acc, entry) => {
        const entryMacros = entry?.foodProduct?.macros;
        return {
          calories:
            (acc.calories || 0) +
            ((entryMacros.calories || 0) *
              entry.servingSize?.quantity *
              entry.servingSize?.gramWeight) /
              100,
          protein:
            (acc.protein || 0) +
            ((entryMacros.protein || 0) *
              entry.servingSize?.quantity *
              entry.servingSize?.gramWeight) /
              100,
          carbohydrates:
            (acc.carbohydrates || 0) +
            ((entryMacros.carbohydrates || 0) *
              entry.servingSize?.quantity *
              entry.servingSize?.gramWeight) /
              100,
          fat:
            (acc.fat || 0) +
            ((entryMacros.fat || 0) *
              entry.servingSize?.quantity *
              entry.servingSize?.gramWeight) /
              100,
        };
      },
      { calories: 0, protein: 0, carbohydrates: 0, fat: 0 },
    );
  }
  console.log(data);

  return (
    <div className="w-full flex items-center">
      <div className="w-[50px] rounded-md overflow-hidden flex shrink-0 items-center justify-center h-[50px] bg-[#1C1C1C]">
        {data.image_url ? (
          <img src={data.image_url} className="w-full h-full" />
        ) : (
          <svg
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.7355 5.5006V28.5006C27.7355 28.7658 27.6301 29.0202 27.4426 29.2077C27.255 29.3952 27.0007 29.5006 26.7355 29.5006C26.4703 29.5006 26.2159 29.3952 26.0284 29.2077C25.8408 29.0202 25.7355 28.7658 25.7355 28.5006V22.5006H19.7355C19.4703 22.5006 19.2159 22.3952 19.0284 22.2077C18.8408 22.0202 18.7355 21.7658 18.7355 21.5006C18.7819 19.1052 19.0845 16.7216 19.638 14.3906C20.8605 9.32935 23.178 5.93685 26.3417 4.58185C26.4938 4.51671 26.6596 4.49032 26.8244 4.50503C26.9892 4.51974 27.1477 4.5751 27.2858 4.66615C27.424 4.75719 27.5373 4.88108 27.6158 5.02672C27.6943 5.17235 27.7354 5.33517 27.7355 5.5006ZM15.7217 5.33685C15.7021 5.20554 15.6566 5.07945 15.5878 4.96593C15.5189 4.8524 15.4282 4.75372 15.3208 4.67564C15.2135 4.59755 15.0916 4.54163 14.9624 4.51113C14.8332 4.48062 14.6992 4.47616 14.5683 4.49798C14.4373 4.51981 14.312 4.56749 14.1997 4.63825C14.0874 4.70901 13.9902 4.80142 13.914 4.91011C13.8378 5.01879 13.7839 5.14157 13.7556 5.27128C13.7273 5.40099 13.7252 5.53504 13.7492 5.6656L14.7217 11.5006H11.7355V5.5006C11.7355 5.23538 11.6301 4.98103 11.4426 4.79349C11.255 4.60596 11.0007 4.5006 10.7355 4.5006C10.4703 4.5006 10.2159 4.60596 10.0284 4.79349C9.84083 4.98103 9.73547 5.23538 9.73547 5.5006V11.5006H6.74922L7.72172 5.6656C7.74578 5.53504 7.7436 5.40099 7.71531 5.27128C7.68702 5.14157 7.63319 5.01879 7.55695 4.91011C7.48071 4.80142 7.38359 4.70901 7.27126 4.63825C7.15893 4.56749 7.03363 4.51981 6.90268 4.49798C6.77173 4.47616 6.63774 4.48062 6.50853 4.51113C6.37932 4.54163 6.25748 4.59755 6.15011 4.67564C6.04275 4.75372 5.952 4.8524 5.88317 4.96593C5.81434 5.07945 5.76881 5.20554 5.74922 5.33685L4.74922 11.3369C4.74025 11.391 4.73565 11.4457 4.73547 11.5006C4.73747 12.9179 5.24037 14.2888 6.15531 15.3712C7.07025 16.4535 8.33832 17.1777 9.73547 17.4156V28.5006C9.73547 28.7658 9.84083 29.0202 10.0284 29.2077C10.2159 29.3952 10.4703 29.5006 10.7355 29.5006C11.0007 29.5006 11.255 29.3952 11.4426 29.2077C11.6301 29.0202 11.7355 28.7658 11.7355 28.5006V17.4156C13.1326 17.1777 14.4007 16.4535 15.3156 15.3712C16.2306 14.2888 16.7335 12.9179 16.7355 11.5006C16.7353 11.4457 16.7307 11.391 16.7217 11.3369L15.7217 5.33685Z"
              fill="#7A7A7A"
            />
          </svg>
        )}
      </div>
      <div className="px-4 flex flex-col">
        <h3 className="font-medium flex items-center">
          {data?.name}{' '}
          {data?.default ? (
            <Star className="w-4 h-4 ml-2" fill={'#27AE60'} color={'#27AE60'} />
          ) : null}
        </h3>
        <div className="text-[#EBEBF5]/50 text-[15px] tracking-wide">
          {totalMacros?.calories.toFixed(1)} kcal &bull;{' '}
          {totalMacros?.protein.toFixed(1)}
          <span className="font-semibold text-white/50">P</span>{' '}
          {totalMacros?.fat.toFixed(1)}
          <span className="font-semibold text-white/50">F</span>{' '}
          {totalMacros?.carbohydrates.toFixed(1)}
          <span className="font-semibold text-white/50">C</span>
        </div>
      </div>
    </div>
  );
}
function MealScreen({ meal }: { meal: Meal }) {
  const defaultSize = meal.sizes?.find((x) => x.default)!;
  const otherSizes = meal.sizes?.filter((x) => !x.default);
  return (
    <div className="justify-center flex flex-col items-center">
      <NextSeo
        title={`${meal.name} | Gympal`}
        description={`${meal.user?.displayName} shared a meal with you on Gympal!`}
      />

      <div className="flex flex-col items-center justify-between px-5 w-full max-w-[450px] h-full mt-24 mb-24">
        <div className="flex flex-col items-center text-start md:text-center mb-10">
          {/* <h1 className="text-[36px] font-medium  font text-[#ECECEF]/60"> */}
          <h1 className="text-[30px] break-word font-medium  font text-[#ECECEF]/60">
            {meal?.user?.displayName} shared "
            <span className="text-white break-word">{meal?.name}</span>" with
            you!
          </h1>
        </div>

        <div className="w-full flex-grow overflow-y-auto space-y-10 pb-20">
          <div>
            {/* {otherSizes.length ? (
              <h3 className=" text-white/80 text-[19px] font-semibold mb-2">
                Main meal:
              </h3>
            ) : null} */}
            <div className="w-full flex-grow overflow-y-auto space-y-2">
              <MealCard data={{ ...defaultSize, name: meal.name }} />
            </div>
          </div>
          {otherSizes?.length ? (
            <div>
              <h3 className="text-white/80 text-[19px] font-medium mb-4">
                Included meal sizes:
                {/* ({otherSizes?.length}) */}
              </h3>
              <div className="w-full flex-grow overflow-y-auto space-y-2">
                {otherSizes?.map((x) => (
                  <MealCard data={x} key={x.id} />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className="fixed bottom-10 px-5 w-full max-w-[450px]">
        <a href={`exp+gympal://shared/meal/${meal.id}`} className="w-full">
          <button className="bg-white text-black font-bold  w-full py-4 rounded-full">
            Open meal in app
          </button>
        </a>
      </div>
    </div>
  );
}
export const getStaticProps: GetStaticProps = async (ctx) => {
  const mealId = (ctx.params?.id || '') as string;
  // const isDev = ctx.preview || ctx.previewData?.dev === true;

  const data = await getMeal(mealId);

  if (!data.payload) {
    return {
      notFound: true,
      revalidate: 10,
    };
  }

  return {
    props: { meal: data.payload },
    revalidate: 5,
  };
};

export const getStaticPaths: GetStaticPaths = () =>
  Promise.resolve({ paths: [], fallback: 'blocking' });

export default MealScreen;
