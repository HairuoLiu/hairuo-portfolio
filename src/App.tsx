import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import CameraDetail from './pages/CameraDetail';
import Navbar from './components/Navbar';

function App(): JSX.Element {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-dark-900 text-white font-body">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/camera/:cameraId" element={<CameraDetail />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
