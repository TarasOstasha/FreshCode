import logo from './logo.svg';
import { Component, createContext, useContext, useEffect, useState } from 'react';
import './App.css';
//import UserList from './components/UserList';
import LoginForm from './components/LoginForm';
//import Weather from './components/Weather';
import ViewPortParams from './components/ViewPortParams';
import RandomUsers from './components/RandomUsers';
import ImageWrapper from './components/ImageWrapper';
import SignUp from './components/SignUpForm';
import CurrentWeather from './components/CurrentWeather';
import AnimalSlider from './components/AnimalSlider';
import UserListWithClasses from './components/UserListWithClasses';
import Carousel from './components/Carousel';



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




// ThemeContext usage
// theme color light, dark, purple
// import UserPage from './pages/UserPage';
// import styles from './App.module.css';
// import classNames from 'classnames';
// import { ThemeContext } from './contexts';
// import CONSTANTS from './constants';
// const {THEMES: {LIGHT, DARK, PURPLE}}  = CONSTANTS;

// function App() {
//   const [theme, setTheme] = useState(LIGHT);
//   // show saved theme from localstorage
//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme');
//     setTheme(savedTheme ? savedTheme : LIGHT);
//   }, []);
//   // if changed a theme set a new color theme
//   useEffect(() => {
//     localStorage.setItem('theme', theme);
//   }, [theme]);

//   const containerClassName = classNames(styles.pageContainer, {
//     [styles.light]: theme === LIGHT,
//     [styles.dark]: theme === DARK,
//     [styles.purple]: theme === PURPLE,
//   });

//   return (
//     <ThemeContext.Provider value={{theme, setTheme}}>
//       <div className={containerClassName}><UserPage /></div>
//     </ThemeContext.Provider>

//   )
// }

// classes
// import CounterWithClasses from './components/CounterWithClasses';
// class App extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//        step: 1
//     }
//   }
//   handleStepChange=({target : { value } })=> {
//     this.setState({ step: +value })
//   }
//   render() {
//     return (
//       <>
//       <input type='number' value={this.state.step} onChange={this.handleStepChange} />
//       {/* <CounterWithClasses step={this.state.step} /> */}
//       <CounterWithClasses step={1} />
//       </>

//     )
//   }

// }

// Routing
// import { BrowserRouter as Router, Route, Switch, Link, useHistory, useRouteMatch, NavLink } from 'react-router-dom';

// const navLinkStyles = isActive => ( { color: isActive ? 'green' : 'blue' } );
// function App() {
//   return (
//     <Router>
//       <nav>
//         <li><NavLink style={navLinkStyles} to='/'>Home</NavLink></li>
//         <li><NavLink style={navLinkStyles} to='/about'>About</NavLink></li>
//         <li><NavLink style={navLinkStyles} to='/components'>Components</NavLink></li>
//         <li><NavLink style={navLinkStyles} to='/contacts'>Contacts</NavLink></li>
//       </nav>
//       <Switch>
//         <Route exact path="/">
//           <Home />
//         </Route>
//         <Route path="/about">
//           <About />
//         </Route>
//         <Route path="/components">
//           <Components />
//         </Route>
//         <Route path="/contacts">
//           <Contacts />
//         </Route>
//         <Route path="/*">
//           <NotFound />
//         </Route>
//       </Switch>
//     </Router>
//   )
// }


// slider
// function App() {
//   // return <AnimalSlider />
//   return <UserListWithClasses />
// }

// home work carousel

export default App;
function App() {
  return <Carousel />
}

// test router pages
// function Home() {
//   return <div>Home</div>
// }

// function Components() {
//   const { url, path } = useRouteMatch();

//   return <div>
//     <Link to={`${url}/login`}>Login</Link>{" "}
//     <Link to={`${url}/register`}>Register</Link>
//     <Switch>
//       <Route path={`${path}/login`}>
//         <LoginForm />
//       </Route>
//       <Route path={`${path}/register`}>
//         <SignUp />
//       </Route>
//     </Switch>
//   </div>
// }

// function About() {
//   return <div>About</div>
// }

// function Contacts() {
//   return <div>Contacts</div>
// }

// function NotFound() {
//   const history = useHistory();
//   useEffect(() => {
//     const id = setTimeout(() => {

//       history.push('/');
//     }, 5000)

//     return () => {
//       clearTimeout(id) // remove settimeiout
//     }
//   })
//   return <h1>404 Not Found</h1>
// }