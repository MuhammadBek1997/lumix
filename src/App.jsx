import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Group from './pages/Group';
import Services from './pages/Services';
import Prices from './pages/Prices';
import ContactUs from './pages/ContactUs';
import './App.css';
import Sidebar from './components/Sidebar';
import { useState } from 'react';

function App() {
  const [showSidebar,setShowSidebar] = useState(false);
  const [padding,setPadding] = useState('7vh')

  function test(amount) {
    setPadding(amount)
    setShowSidebar(true)
  }
  
  return (
    <>
      <Navbar test={test} setShowSidebar={setShowSidebar} showSidebar={showSidebar}/>
      {showSidebar ? <Sidebar padding={padding} test={test}/> : null }
      <div className='bodyElements' >
        <Home/>
        <AboutUs/>
        <Group/>
        <Services/>
        <Prices/>
        <ContactUs/>
      </div>
      
    </>
  );
}

export default App;
