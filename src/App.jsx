import { useState } from 'react'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import Info from './Components/Info';
import Verticalscroll from './Components/Verticalscroll';
// import Home from './Components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Home/>
    <Info/>
    <Verticalscroll/>
    
    
    </>

);
}

export default App;
