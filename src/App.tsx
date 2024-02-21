// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import CarManagement from "./pages/CarManagement";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/CarManagement" element={<CarManagement />} />
        <Route path="/login" element={<AdminLogin />} />
        {/* <Route path="/" element={<UserLandingPage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
