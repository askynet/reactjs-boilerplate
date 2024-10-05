import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import './App.css';
import { AppLayout } from './layout/AppLayout';
import { ConfigProvider } from 'antd';
import { themeConfig } from './config/AppTheme';
import Welcome from './routes/Welcome';
import Login from './routes/Login';
import Dashboard from './routes/Dashboard';
import ProtectedRoute from './layout/ProtectedRoutes';

const isAuthenticated = () => {
  return !!localStorage.getItem("authToken");
};

function App() {
  return (
    <>
      <Router>
        <ConfigProvider theme={themeConfig}>
          <Routes>
            <Route path="/" element={<Welcome />} />
            {/* Public Route: Login */}
            <Route path="/login" element={<Login />} />


            {/* Protected Routes */}
            <Route
              path="/"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated()}>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </ConfigProvider>
      </Router>
    </>
  );
}

export default App;
