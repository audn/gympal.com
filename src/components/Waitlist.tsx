import { motion } from 'framer-motion';
import { SyntheticEvent, useState } from 'react';
import { joinWaitlist } from '../hooks/waitlist';

function Error({ message }: { message: string }) {
  if (message) {
    return <div className="text-red-500 text-sm mt-3">{message}</div>;
  } else return <></>;
}
function Waitlist({ scanned }: { scanned?: boolean }) {
  const [email, setEmail] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  async function onAttemptJoinWaitlist(event: SyntheticEvent) {
    event.preventDefault();
    try {
      setIsLoading(true);
      const data = await joinWaitlist(email, scanned);
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
        <form
          onSubmit={onAttemptJoinWaitlist}
          className="space-y-3 mt-10 md:w-[300px] items-center"
        >
          <input
            className="bg-types-100 h-[44px] outline-none w-full  rounded-xl px-6 py-2"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event?.target.value)}
          />
          <button className="bg-types-fat w-full h-[40px] text-black px-4 text-center justify-center flex items-center font-bold transition-all ease-out duration-200 hover:bg-opacity/50 rounded-xl">
            {isLoading ? (
              <i className="fa-solid animate-spin fa-spinner-third" />
            ) : isSuccess ? (
              <div className="flex  items-center">
                <i className="text-lg mr-2 fa-solid fa-check" />
                Added{' '}
              </div>
            ) : (
              ' Join Waitlist'
            )}
          </button>
        </form>
        {isSuccess ? (
          <motion.div
            animate="enter"
            exit="exit"
            className="max-w-3xl mt-4 text-sm "
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
            You're on the list!{' '}
            <a
              rel="noopener noreferrer"
              className="border-b-2 border-types-150 pb"
              href="https://twitter.com/gympalcom"
              target="_blank"
            >
              Stay updated on Twitter
              <i className="fa-brands fa-twitter ml-1" />
            </a>
          </motion.div>
        ) : null}
        <Error message={error} />
      </div>
    </>
  );
}

export default Waitlist;
