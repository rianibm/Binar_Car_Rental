// src/App.tsx
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import CarManagement from "./pages/CarManagement";

const isAuthenticated = () => {
  const userToken = localStorage.getItem("userToken");
  return Boolean(userToken);
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Redirect to login if not authenticated */}
        <Route
          path="/"
          element={
            isAuthenticated() ? (
              <Navigate to="/admin-dashboard" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/car-management" element={<CarManagement />} />
        <Route path="/login" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
};

export default App;
