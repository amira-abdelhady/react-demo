import logo from './logo.svg';
import './App.css';
import Login from './pages/login/login';
import Home from './pages/home/home';
import { useState } from 'react';

function App() {
  const [isLogin,setLogin]=useState(false)
  const handleLogin=()=>{
    setLogin(true)
  }
  return (
    <>
      <Login handleLogin={handleLogin}/>
      {isLogin && <Home/>}
      <Home/>
    </>
  );
}

export default App;
