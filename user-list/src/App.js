import logo from './logo.svg';
import { useState } from 'react';
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

function App() {
  // return <RandomUsers />
  // return <ImageWrapper width="50px" height="50px" title="it's a cat" hidden={false}>
  //   <img src="https://th-thumbnailer.cdn-si-edu.com/bgmkh2ypz03IkiRR50I-UMaqUQc=/1000x750/filters:no_upscale():focal(1061x707:1062x708)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/55/95/55958815-3a8a-4032-ac7a-ff8c8ec8898a/gettyimages-1067956982.jpg" alt="cat" />
  // </ImageWrapper>
  // return <SignUp />
  return <CurrentWeather />
}



export default App;
