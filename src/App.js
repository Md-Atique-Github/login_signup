import logo from './logo.svg';
import './App.css';
import Loginform from './Components/loginform';
import Signupform from './Components/Signupform';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Loginform/>}/>
        <Route path="/signup" element={<Signupform/>}/>
        
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
