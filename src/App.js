import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          {/* Route all paths to Portfolio */}
          <Route path="/*" element={<Portfolio />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
