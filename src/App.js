import Row from './components/Home/Row/Row';
import './App.css';
import Menu from './components/Menu/Menu'
import Home from './components/Home/Home'
import { Route, Routes } from "react-router-dom"
import Welcome from './components/Welcome/Welcome';
function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/welcome' element={<Welcome/>}></Route>
      </Routes>
      
     
    </div>
  );
}

export default App;
