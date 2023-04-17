import { Routes, Route } from 'react-router-dom';
import StartService from './pages/StartService';
import Home from './pages/Home';
import './styles';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/startservice" element={ <StartService /> } />
    </Routes>
  );
}

export default App;
