import { Routes, Route } from 'react-router-dom';
import StartService from "./pages/StartService";
function App() {


  return (
    <>
      <Routes>
          <Route path="/" element={ <StartService /> } />
        </Routes>
    </>
  )
}

export default App
