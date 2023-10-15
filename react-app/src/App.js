// import './App.css';
import { useState } from 'react';
import Header from './components/header';
import Counter from './components/Counter';
import User from './components/User';
import ThemeSwitcher from './components/ThemeSwitcher';
// import styles from './App.css';
import styles from './App.module.css';
import UsersList from './components/UsersList';




function App() {
  // const numbers0 = [1,2,3,4,5,6];
  // const numbers = numbers0.map((n,i)=><li key={i}>{n}</li>)
  // return <ul>{numbers}</ul>
  // const navList = [{title: 'Home', href: '#'}, {title: 'Contact',href: '#'}]
  // const isLogin = true;
  // return <Header isLogin={isLogin} navList={navList} /> 
  // return <Counter /> 
  const [isLight, setIsLight] = useState(true);

  const containerStyle = {
    color: isLight ? 'black' : 'white',
    backgroundColor: isLight ? 'white' : 'black'
  }

  // return (
  //   <div className={styles.container} style={containerStyle}>
  //     <ThemeSwitcher isLight={isLight} setIsLight={setIsLight} />
  //     <User isLight={isLight} />
  //   </div>
  // )
  return <UsersList />

}

export default App;


