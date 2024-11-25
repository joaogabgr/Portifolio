import './global.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Index from './pages';
import Projects from './pages/projects';
import Studies from './pages/studies';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/studies" element={<Studies />} />
      </Routes>
    </Router>     
  );
}

export default App;
