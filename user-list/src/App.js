import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
//import UserList from './components/UserList';
import LoginForm from './components/LoginForm';
//import Weather from './components/Weather';
import ViewPortParams from './components/ViewPortParams';


function App() {
  const [isHide, setHide] = useState(false);
  const changeHide = () => setHide(!isHide)
  return (
    // <UserList />
    // <LoginForm />
    <>
    <button onClick={changeHide}>{isHide ? 'Show' : 'Hide' } component</button>
    {!isHide && <ViewPortParams />}
    </>
    
  );
}

export default App;
