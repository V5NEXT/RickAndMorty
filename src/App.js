import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import CharacterList from './pages/CharacterList';
import Episodes from './pages/Episodes';
import Locations from './pages/Locations';
import CharacterDetails from './pages/CharacterDetails';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/characters' element={<CharacterList/>}/>
        <Route path='/character/:id' element={<CharacterDetails/>}/>
        <Route path='/episodes' element={<Episodes/>}/>
        <Route path='/locations' element={<Locations/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
