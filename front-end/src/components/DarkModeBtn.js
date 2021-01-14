import React, { useContext } from 'react';
import TrybeerContext from '../context/TrybeerContext';
import '../css/darkmodeBtn.css';

function DarkModeBtn() {
  const { theme, setTheme } = useContext(TrybeerContext);

  const darkOnOff = () => {
    if (theme === 'light') setTheme('dark');
    else setTheme('light');
  };

  return (
    <div>
      {theme === 'light' && <p>Light Mode</p>}
      {theme === 'dark' && <p>Dark Mode</p>}
      <label class="switch">
        <input type="checkbox" onClick={() => darkOnOff()} />
        <span class="slider round"></span>
      </label>
    </div>
  );
}

export default DarkModeBtn;
