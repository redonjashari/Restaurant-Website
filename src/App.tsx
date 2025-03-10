import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/HomePage';
import Menu from './components/pages/MenuPage';
import Navbar from './components/Nav/Navbar';
import Reviews from './components/pages/Reviews';
import Location from './components/pages/Location';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Menu" element={<Menu/>}/>
        <Route path="/Reviews" id="reviews"/>
        <Route path="/Menu" id="location"/>
      </Routes>
    </div>
  );
};

export default App
