import './App.css';
import Header from './components/header';



function App() {
  // const numbers0 = [1,2,3,4,5,6];
  // const numbers = numbers0.map((n,i)=><li key={i}>{n}</li>)
  // return <ul>{numbers}</ul>
  const navList = [{title: 'Home', href: '#'}, {title: 'Contact',href: '#'}]
  const isLogin = true;
  return <Header isLogin={isLogin} navList={navList} /> 
}

export default App;


