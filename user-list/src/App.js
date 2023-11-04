
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
import validations from './utils/validationSchemas'; // import validations
import UserForm from './components/UserForm';
import UserProfileInfo from './pages/UserProfileInfo';


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
// const slides = [
//   {
//     title: 'Tapestry of Blazing Starbirth',
//     description:
//       'This image is one of the most photogenic examples of the many turbulent stellar nurseries the NASA/ESA Hubble Space Telescope has observed during its 30-year lifetime. The portrait features the giant nebula NGC 2014 and its neighbour NGC 2020 which together form part of a vast star-forming region in the Large Magellanic Cloud, a satellite galaxy of the Milky Way, approximately 163 000 light-years away.',
//     src: 'https://cdn.spacetelescope.org/archives/images/screen/heic2007a.jpg',
//   },
//   {
//     title: 'Westerlund 2 — Hubble’s 25th anniversary image',
//     description:
//       'This NASA/ESA Hubble Space Telescope image of the cluster Westerlund 2 and its surroundings has been released to celebrate Hubble’s 25th year in orbit and a quarter of a century of new discoveries, stunning images and outstanding science. The image’s central region, containing the star cluster, blends visible- light data taken by the Advanced Camera for Surveys and near-infrared exposures taken by the Wide Field Camera 3. The surrounding region is composed of visible - light observations taken by the Advanced Camera for Surveys.',
//     src:
//       'https://cdn.spacetelescope.org/archives/images/thumb700x/heic1509a.jpg',
//   },
//   {
//     title: 'Saturn and its northern auroras (composite image)',
//     description:
//       'This image is a composite of observations made of Saturn in early 2018 in the optical and of the auroras on Saturn’s north pole region, made in 2017. In contrast to the auroras on Earth the auroras on Saturn are mainly visible in the ultraviolet — a part of the electromagnetic spectrum blocked by Earth’s atmosphere — and therefore astronomers have to rely on space telescopes like the NASA/ ESA Hubble Space Telescope to study them.',
//     src:
//       'https://cdn.spacetelescope.org/archives/images/thumb700x/heic1815a.jpg',
//   },
//   {
//     title: 'Hubble image of variable star RS Puppis',
//     description:
//       'This Hubble image shows RS Puppis, a type of variable star known as a Cepheid variable. As variable stars go, Cepheids have comparatively long periods — RS Puppis, for example, varies in brightness by almost a factor of five every 40 or so days. RS Puppis is unusual; this variable star is shrouded by thick, dark clouds of dust enabling a phenomenon known as a light echo to be shown with stunning clarity. These Hubble observations show the ethereal object embedded in its dusty environment, set against a dark sky filled with background galaxies.',
//     src:
//       'https://cdn.spacetelescope.org/archives/images/thumb700x/heic1323a.jpg',
//   },
//   {
//     title: 'Jupiter and its shrunken Great Red Spot',
//     description:
//       "This full-disc image of Jupiter was taken on 21 April 2014 with Hubble's Wide Field Camera 3 (WFC3).",
//     src:
//       'https://cdn.spacetelescope.org/archives/images/thumb700x/heic1410a.jpg',
//   },
// ];



// function App(props) {
//   // return <Carousel slides={slides} />;
//   return <></>
// }
// export default App;




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



// validation form
function App() {
  // return <UserForm />
  return <UserProfileInfo />
}



export default App;