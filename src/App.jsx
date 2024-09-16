import { useState } from 'react'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import Info from './Components/Info';
import Verticalscroll from './Components/Verticalscroll';
import Faq from './Components/Faq';
import Feature from './Components/Feature';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import Query from './Components/Query';
// import Home from './Components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Home/>
    <Info/>
    <Verticalscroll/>
    <Faq/>
    <Feature/>
    <Projects/>
    <Query/>
    <Footer/>
    
    </>

);
}

export default App;
