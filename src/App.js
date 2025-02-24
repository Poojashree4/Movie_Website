//import logo from './logo.svg';
//import './App.css';
import Loginpage from './Components/Loginpage';
import { Router, Route, Routes } from 'react-router-dom';

//import { Route, Routes } from 'react-router-dom';
import Mainpage from './Components/Mainpage';

function App() {
  return (
    <>
    
  <Routes>
    <Route path='/' element={<Loginpage/>} />
    <Route path="/mainpage" element={<Mainpage />} />
    
  </Routes>
 </>
  );
}

export default App;
