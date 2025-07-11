import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Portfolio from './pages/Portfolio';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      
        <Routes>
          {/* Route all paths to Portfolio */}
          <Route path="/*" element={<Portfolio />} />
        </Routes>
     
    </BrowserRouter>
  );
}

export default App;
