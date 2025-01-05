import { AnimatePresence, motion } from 'framer-motion';
import React, { useCallback, useEffect } from 'react';
import Waitlist from './Waitlist';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BetaSignupModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const handleEscape = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, handleEscape]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="relative w-full max-w-md rounded-lg bg-[#141414] p-6"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute -right-2 bg-types-200 w-7 h-7 rounded-full flex items-center justify-center -top-2 text-gray-400 hover:text-gray-300"
              aria-label="Close modal"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="space-y-6">
              <h2 className="text-center text-2xl font-medium text-gray-200">
                We need your email to invite you to the Android beta.
              </h2>
              <Waitlist platform="ANDROID" />

              <p className="text-center text-sm text-gray-400">
                Google requires us to manually add at least 20 testers for 14
                days before we can release the app to everyone. Please enter
                your email so we can add you to our tester list. You'll receive
                an invite link within 12 hours.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BetaSignupModal;
