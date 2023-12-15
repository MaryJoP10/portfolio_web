import './styles/App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/home'
import About from './pages/about'
import Project from './pages/project'
import Navbar from './components/navbar/navbar'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/project' element={<Project/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
