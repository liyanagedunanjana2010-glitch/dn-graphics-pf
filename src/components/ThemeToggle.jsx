import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // LocalStorage එකෙන් කලින් තෝරාගත් Theme එක ලබාගැනීම
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="relative w-16 h-8 flex items-center bg-gray-800 dark:bg-yellow-400/20 rounded-full p-1 cursor-pointer transition-colors duration-500 overflow-hidden shadow-inner border border-gray-700 dark:border-yellow-400/40 group"
    >
      {/* 🌊 Liquid Wave Background Layer */}
      <span
        className={`absolute inset-0 bg-yellow-400/30 dark:bg-indigo-600/40 transition-transform duration-700 ease-in-out ${
          isDark ? 'translate-x-full scale-125' : 'translate-x-0 scale-100'
        } rounded-full filter blur-sm`}
      />

      {/* 🔘 Liquid Bubble / Sliding Knob */}
      <div
        className={`w-6 h-6 rounded-full bg-yellow-400 dark:bg-indigo-500 shadow-md transform transition-all duration-500 cubic-bezier(0.68, -0.55, 0.265, 1.55) flex items-center justify-center relative z-10 ${
          isDark ? 'translate-x-8 rotate-180' : 'translate-x-0 rotate-0'
        }`}
      >
        {isDark ? (
          // 🌙 Moon Icon
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        ) : (
          // ☀️ Sun Icon
          <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 100 2h1z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;