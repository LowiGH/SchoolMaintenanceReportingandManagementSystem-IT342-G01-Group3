import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from './components/pages/LoginPage';
import BuildingSelection from './components/pages/BuildingSelection';
import ProfilePage from './components/pages/ProfilePage'; // Added this import
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route redirects to login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* Login page route */}
        <Route path="/login" element={<LoginPage />} />
        
        {/* Building selection route */}
        <Route path="/buildings" element={<BuildingSelection />} />

        {/* ✅ Profile page route */}
        <Route path="/profile" element={<ProfilePage />} />
        
        {/* Catch all route - redirect to login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
