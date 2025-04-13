import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import {Skills} from './pages/Skills';
import {AboutMe} from './pages/AboutMe';
import {Projects} from './pages/Projects';
import {Contact} from './pages/Contact';
import {Hello} from './pages/Hello';

function App() {
  return (
    <>
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/about" element={<AboutMe/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/hello" element={<Hello/>}/>
      </Routes>
    </Router>
    {/* <h1>hello</h1> */}
    </div>

    </>
  );
}

export default App
