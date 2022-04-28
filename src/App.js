import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import HomePage from './pages/HomePage';
import Projects from './pages/Projects';
import NavBar from './NavBar';
import './App.css';
import './scripts/typewriter.js';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/Projects" element={<Projects />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
