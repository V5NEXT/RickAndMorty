import './App.css';
import CharacterList from './pages/CharacterList';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './component/Navbar';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <CharacterList/>
    </div>
    </BrowserRouter>

  );
}

export default App;
