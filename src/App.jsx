import { Routes, Route } from 'react-router-dom';
import StartService from './pages/StartService';
import Home from './pages/Home';
import './styles';
import Services from './pages/Services';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/startservice" element={ <StartService /> } />
      <Route path="/services" element={ <Services /> } />
    </Routes>
  );
}

export default App;
