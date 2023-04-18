import { Routes, Route } from 'react-router-dom';
import StartService from './pages/StartService';
import Home from './pages/Home';
import './styles';
import Services from './pages/Services';
import EmployeeServices from './pages/EmployeeServices';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/startservice" element={ <StartService /> } />
        <Route path="/services" element={ <Services /> } />
        <Route path="/employeeservices" element={ <EmployeeServices /> } />
      </Routes>
    </Provider>
  );
}

export default App;