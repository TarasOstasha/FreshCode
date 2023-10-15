import React from 'react';
import { FaSun, FaMoon } from "react-icons/fa6";
// import { GiMoon } from "react-icons/gi";



function ThemeSwitcher(props) {
  const { isLight, setIsLight } = props  

  const sunStyle = {
    color: isLight ? 'yellow' : 'grey',
    boxShadow: isLight ? '0 0 2px grey' : '',
    backgroundColor: isLight ? 'grey' : '',
    borderRadius: isLight ? '50%' : ''
  }

  const moonStyle = {
    color: isLight ? 'grey' : 'yellow',
    boxShadow: isLight ? '' : '0 0 2px grey',
    backgroundColor: isLight ? '' : 'grey',
    borderRadius: isLight ? '' : '50%'
  }

  function setLight() {
    setIsLight(true);
  }

  function setDark() {
    setIsLight(false);
  }

  return (
    <section>
    <FaSun onClick={setLight} style={sunStyle} />
    <FaMoon onClick={setDark} style={moonStyle} />
    {/* <GiMoon /> - example */}
     </section>
    // <div>ThemeSwitcher</div>
  )
}

export default ThemeSwitcher;