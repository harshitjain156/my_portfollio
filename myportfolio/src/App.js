import logo from './logo.svg';
import './App.css';
import{ Routes,Route} from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About />} />

      </Routes>
    </div>
  );
}

export default App;
