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
import Innovation from './Components/Innovation';
import Timeline from './Components/Timeline';
// import Home from './Components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Home/>
    <Info/>
    <Verticalscroll/>
    <Faq/>
    {/* <Timeline/> */}
    <Feature/>
  
    <Projects/>
    <img src="./images/video.png" alt="Video"  className='pb-8' />
    <Innovation/>
    <Query/>
   
    <Footer/>
    
    </>

);
}

export default App;
