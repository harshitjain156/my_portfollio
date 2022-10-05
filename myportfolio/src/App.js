import logo from './logo.svg';
import './App.css';
import{ Routes,Route} from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Skills from './component/Skills'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
