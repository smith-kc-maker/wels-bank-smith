import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Transfer from './pages/Transfer';

// Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return user ? <>{children}</> : <Navigate to="/login" />;
};

// Public Route Component (redirect to dashboard if logged in)
const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return !user ? <>{children}</> : <Navigate to="/dashboard" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route 
              path="login" 
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              } 
            />
            <Route 
              path="register" 
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              } 
            />
            <Route 
              path="dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="transfer" 
              element={
                <ProtectedRoute>
                  <Transfer />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="bills" 
              element={
                <ProtectedRoute>
                  <div className="text-center p-8">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Bill Payments</h1>
                    <p className="text-gray-600">Coming soon! Pay all your bills in one place.</p>
                  </div>
                </ProtectedRoute>
              } 
            />
            <Route 
              path="transactions" 
              element={
                <ProtectedRoute>
                  <div className="text-center p-8">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Transaction History</h1>
                    <p className="text-gray-600">Coming soon! View and analyze all your transactions.</p>
                  </div>
                </ProtectedRoute>
              } 
            />
            <Route 
              path="profile" 
              element={
                <ProtectedRoute>
                  <div className="text-center p-8">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Profile</h1>
                    <p className="text-gray-600">Coming soon! Manage your profile and preferences.</p>
                  </div>
                </ProtectedRoute>
              } 
            />
            <Route 
              path="settings" 
              element={
                <ProtectedRoute>
                  <div className="text-center p-8">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Settings</h1>
                    <p className="text-gray-600">Coming soon! Customize your banking experience.</p>
                  </div>
                </ProtectedRoute>
              } 
            />
            <Route 
              path="admin" 
              element={
                <ProtectedRoute>
                  <div className="text-center p-8">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Admin Panel</h1>
                    <p className="text-gray-600">Coming soon! Admin features for account management.</p>
                  </div>
                </ProtectedRoute>
              } 
            />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;