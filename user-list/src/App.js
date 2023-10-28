import logo from './logo.svg';
import { createContext, useContext, useEffect, useState } from 'react';
import './App.css';
//import UserList from './components/UserList';
import LoginForm from './components/LoginForm';
//import Weather from './components/Weather';
import ViewPortParams from './components/ViewPortParams';
import RandomUsers from './components/RandomUsers';
import ImageWrapper from './components/ImageWrapper';
import SignUp from './components/SignUpForm';
import CurrentWeather from './components/CurrentWeather';


// function App() {
//   const [isHide, setHide] = useState(false);
//   const changeHide = () => setHide(!isHide)
//   return (
//     // <UserList />
//     // <LoginForm />
//     <>
//     <button onClick={changeHide}>{isHide ? 'Show' : 'Hide' } component</button>
//     {!isHide && <ViewPortParams />}
//     </>

//   );
// }

// function App() {
// return <RandomUsers />
// return <ImageWrapper width="50px" height="50px" title="it's a cat" hidden={false}>
//   <img src="https://th-thumbnailer.cdn-si-edu.com/bgmkh2ypz03IkiRR50I-UMaqUQc=/1000x750/filters:no_upscale():focal(1061x707:1062x708)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/55/95/55958815-3a8a-4032-ac7a-ff8c8ec8898a/gettyimages-1067956982.jpg" alt="cat" />
// </ImageWrapper>
// return <SignUp />
// return <CurrentWeather />
// }


// const DataContext = createContext('default');
// const UserContext = createContext('');
// function App() {
//   const data = 'data in app';
//   const user = {
//     name: 'Test',
//     surname: 'Testovich'
//   };
//   return (
//     <UserContext.Provider value={user}>
//       <DataContext.Provider value={data}>
//         <Child />
//       </DataContext.Provider>
//     </UserContext.Provider>

//   )
// }


// theme color light, dark, purple
import UserPage from './pages/UserPage';
import styles from './App.module.css';
import classNames from 'classnames';
import { ThemeContext } from './contexts';
import CONSTANTS from './constants';
const {THEMES: {LIGHT, DARK, PURPLE}}  = CONSTANTS;

function App() {
  const [theme, setTheme] = useState(LIGHT);
  // show saved theme from localstorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setTheme(savedTheme ? savedTheme : LIGHT);
  }, []);
  // if changed a theme set a new color theme
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const containerClassName = classNames(styles.pageContainer, {
    [styles.light]: theme === LIGHT,
    [styles.dark]: theme === DARK,
    [styles.purple]: theme === PURPLE,
  });

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className={containerClassName}><UserPage /></div>
    </ThemeContext.Provider>

  )
}


export default App;


// function Child() {
//   return <ChildChild />
// }

// function ChildChild() {
//   const data = useContext(DataContext);
//   // return <div>{data}</div>
//   return (
//     <div>
//       {data}
//       <ChildChildChild />
//     </div>
//   )
// }

// function ChildChildChild() {
//   const user = useContext(UserContext);
//   return <div>{user.name}</div>
// }