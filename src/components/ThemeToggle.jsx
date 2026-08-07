import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Page එක Load වෙද්දී Dark mode එක Default තැබීම
    document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-800 dark:bg-gray-200 text-yellow-400 dark:text-gray-900 transition duration-300 font-bold text-sm flex items-center justify-center w-10 h-10"
      title="Toggle Light/Dark Mode"
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeToggle;