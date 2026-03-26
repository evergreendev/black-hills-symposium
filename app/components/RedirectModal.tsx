'use client';

import { useState, useEffect } from 'react';

const REDIRECT_URL = 'https://web.cvent.com/event/855f4636-6c74-44f7-abb9-f7b1ab11918c/summary';
const COUNTDOWN_SECONDS = 5;

export default function RedirectModal() {
  const [isOpen, setIsOpen] = useState(true);
  const [countdown, setCountdown] = useState(COUNTDOWN_SECONDS);

  useEffect(() => {
    if (countdown <= 0) {
      window.location.href = REDIRECT_URL;
      return;
    }

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown]);

  const handleManualRedirect = () => {
    window.location.href = REDIRECT_URL;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm">
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full mx-4 text-center text-primary-900 border-4 border-primary-500">
        <h2 className="text-2xl font-bold mb-4 uppercase text-primary-700">Redirecting...</h2>
        <p className="text-lg mb-6 text-gray-700">
          You are being redirected to the updated symposium page.
        </p>
        
        <div className="mb-8">
          <div className="text-5xl font-extrabold text-primary-600 mb-2">
            {countdown}
          </div>
          <p className="text-sm text-gray-500 uppercase tracking-widest">Seconds remaining</p>
        </div>

        <button
          onClick={handleManualRedirect}
          className="w-full bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-6 rounded transition-colors duration-200 uppercase"
        >
          Take me there now
        </button>
      </div>
    </div>
  );
}
