import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import HomePage from './pages/HomePage';
import NavBar from './NavBar';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" element={<HomePage />} exact />
            {/* <Route path="/about" element={<AboutPage />} exact />
            <Route path="/list" element={<ToonListPage />} exact />
            <Route path="/detail/:id" element={<ToonDetailPage />} exact />
            <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
