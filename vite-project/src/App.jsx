
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header"
import Sidebar from "./components/Sidebar";
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import TempContext from './contexts/TempContext';

const minTemp = 16;
const maxTemp = 28;

function App() {

  const [temp, setTemp] = useState (20);
   
   function handleIncreaseTemp() {
    setTemp(actual =>(actual < maxTemp ? actual +1 : actual));
   }
  
    function handleDecreaseTemp() {
     setTemp(actual =>(actual > minTemp ? actual-1 : actual))
    }
  
    function handleResetTemp () {
     setTemp (20);
    }
 

  return (
    <div className='d-flex flex-column min-vh-100'>
      <TempContext.Provider value = {{
        temp,
        handleIncreaseTemp,
        handleDecreaseTemp,
        handleResetTemp,
      }}
      >
    <Header/>
    <div className='flex-grow-1 d-flex gap-3'>
    <Sidebar/>
    <MainContent/>

    </div>
    <Footer/>
    </TempContext.Provider>
    </div>
  )
}

export default App
