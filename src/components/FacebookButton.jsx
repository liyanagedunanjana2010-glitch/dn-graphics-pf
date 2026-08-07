import React from 'react';

const FacebookButton = () => {
  // 💡 ඔබේ Facebook Page/Profile Link එක හෝ Messenger Link එක මෙතැනට දෙන්න:
  // උදාහරණයක් ලෙස: https://m.me/yourpageusername (Messenger) හෝ https://facebook.com/yourpage
  const facebookUrl = "https://facebook.com"; 

  return (
    <a
      href={facebookUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 left-6 z-50 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl transition duration-300 transform hover:scale-110 group"
      title="Connect on Facebook"
    >
      {/* Facebook SVG Icon */}
      <svg
        className="w-7 h-7 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
      
      {/* Hover Tooltip */}
      <span className="absolute left-16 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition duration-300 shadow-md">
        Follow on Facebook
      </span>
    </a>
  );
};

export default FacebookButton;