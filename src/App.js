import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./utils/AuthContext";
import ProtectedRoute from "./utils/ProtectedRoute";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import STP from "./pages/Stp";
import WhatsAuthQR from "./pages/WhatsAuthQr";

const App = () => {
  return (
    <Router basename="/login">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/stp" element={<STP/>}/>
          <Route path="/qrauth" element={<WhatsAuthQR/>}/>
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
