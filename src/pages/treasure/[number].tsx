import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Waitlist from '../../components/Waitlist';
function One() {
  const router = useRouter();
  useEffect(() => {
    if (router.isReady) {
      if (router.query.number !== '1') {
        router.push('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
      }
    }
  }, [router]);
  return (
    <main className={'h-full pt-[71px] px-6 md:pt-[80px]'}>
      <div className="py-10 md:py-24 max-w-6xl mx-auto w-full">
        <motion.div className="max-w-3xl">
          <h1 className="text-white font-normal text-2xl md:text-4xl md:leading-[52px]">
            Congratulations!
          </h1>{' '}
          <h2 className="text-on-100 md:text-lg mt-6">
            Join the waitlist below for exclusive beta perks!
          </h2>
          <p className="text-on-100 md:text-lg mt-6">
            Already registered on the frontpage? You're still eligible.
          </p>
          <Waitlist scanned={true} />
          <p className="text-on-100 text-sm mt-6">
            <span className="font-semibold">Keep in mind:</span> You must
            register during the beta to receive the offer.
          </p>
        </motion.div>
      </div>
    </main>
  );
}

export default One;
