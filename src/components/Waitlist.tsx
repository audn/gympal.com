import { motion } from 'framer-motion';
import { SyntheticEvent, useState } from 'react';
import { joinWaitlist } from '../hooks/waitlist';

function Error({ message }: { message: string }) {
  if (message) {
    return <div className="text-red-500 text-sm mt-3">{message}</div>;
  } else return <></>;
}
function Waitlist({
  scanned,
  platform,
}: {
  scanned?: boolean;

  platform?: 'IOS' | 'ANDROID';
}) {
  const [email, setEmail] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  async function onAttemptJoinWaitlist(event: SyntheticEvent) {
    event.preventDefault();
    try {
      setIsLoading(true);
      const data = await joinWaitlist(email, scanned, platform);
      console.log('data', data);
      if (data) {
        setIsSuccess(true);
      } else {
        setError('something happened');
      }
    } catch (error: any) {
      console.log('error', error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className="flex flex-col w-full">
        <form onSubmit={onAttemptJoinWaitlist} className="space-y-4">
          <input
            className="w-full rounded-lg bg-[#1A1A1A] px-4 py-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary-100"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event?.target.value)}
          />
          <button
            disabled={isSuccess || isLoading}
            className="w-full disabled:opacity-50 rounded-lg bg-brand-primary-100 py-3 text-lg font-medium text-black transition-colors hover:bg-brand-primary-100/50 focus:outline-none focus:ring-2 focus:ring-offset-brand-primary-100"
          >
            {isLoading ? (
              <i className="fa-solid animate-spin fa-spinner-third" />
            ) : isSuccess ? (
              <div className="flex  justify-center items-center">
                <i className="text-lg mr-2 fa-solid fa-check" />
                Done{' '}
              </div>
            ) : (
              'Submit'
            )}
          </button>
        </form>
        {isSuccess ? (
          <motion.div
            animate="enter"
            exit="exit"
            className="max-w-3xl text-center mt-4 text-sm "
            initial="initial"
            variants={{
              initial: { opacity: 0 },
              enter: {
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              },
            }}
          >
            You'll get an invite link within 12 hours!
            {/* <a
              rel="noopener noreferrer"
              className="border-b-2 border-types-150 pb"
              href="https://twitter.com/gympalcom"
              target="_blank"
            >
              Stay updated on Twitter
              <i className="fa-brands fa-twitter ml-1" />
            </a> */}
          </motion.div>
        ) : null}
        <Error message={error} />
      </div>
    </>
  );
}

export default Waitlist;
