import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import CountDown from './CountDown/CountDown'
import Home from './Pages/Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<CountDown />} />
        <Route path='/Home' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
