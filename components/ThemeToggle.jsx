'use client';
import { useState } from 'react';
import { IoMoon,IoSunnyOutline  } from "react-icons/io5";


const themes = {
  winter: 'winter',
  dracula: 'dracula',
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(themes.winter);

  const toggleTheme = () => {
    const newTheme = theme === themes.winter ? themes.dracula : themes.winter;
    document.documentElement.setAttribute('data-theme', newTheme);
    setTheme(newTheme);
  };
  return (
    <button onClick={toggleTheme} className='btn btn-sm btn-outline'>
      {theme === 'winter' ? (
        <IoMoon className='h-4 w-4' />
      ) : (
        <IoSunnyOutline className='h-4 w-4' />
      )}
    </button>
  );
};
export default ThemeToggle;
