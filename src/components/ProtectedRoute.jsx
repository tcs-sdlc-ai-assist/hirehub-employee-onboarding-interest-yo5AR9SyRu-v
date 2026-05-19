import React from 'react';
import { Navigate } from 'react-router-dom';
import { getItem } from '../utils/storage';

function ProtectedRoute({ children }) {
  const isLoggedIn = getItem('userLoggedIn') === 'true';
  return isLoggedIn ? children : <Navigate to="/admin-login" replace />;
}

ProtectedRoute.propTypes = {};

export default ProtectedRoute;