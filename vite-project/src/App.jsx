import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header"
import Sidebar from "./components/Sidebar";
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
 

  return (
    <div className='d-flex flex-column min-vh-100'>
    <Header/>
    <div className='flex-grow-1 d-flex gap-3'>
    <Sidebar/>
    <MainContent/>

    </div>
    <Footer/>
    </div>
  )
}

export default App
