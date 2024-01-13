'use client';
import { MdLightMode } from 'react-icons/md';
import { IoIosMoon } from 'react-icons/io';
import { useTheme } from 'next-themes';
import { Fragment, useEffect, useState } from 'react';
import Providers from '@/app/Providers';

function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <Fragment>
      {mounted &&
        (currentTheme === 'light' ? (
          <MdLightMode
            className="text-xl cursor-pointer hover:text-amber-500"
            onClick={() => setTheme('dark')}
          />
        ) : (
          <IoIosMoon
            className="text-xl cursor-pointer hover:text-amber-500"
            onClick={() => setTheme('light')}
          />
        ))}
    </Fragment>
  );
}

export default DarkModeSwitch;
