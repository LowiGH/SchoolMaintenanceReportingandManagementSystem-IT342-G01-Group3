import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./components/pages/LoginPage";
import ProfilePage from "./components/pages/ProfilePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
