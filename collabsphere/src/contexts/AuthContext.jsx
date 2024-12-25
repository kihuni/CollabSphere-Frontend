import React, { createContext, useState, useEffect } from 'react';
import { getStoredTokens, removeTokens } from '../utils/tokenManager';
import { refreshAccessToken, logout } from '../services/auth';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      const { accessToken, refreshToken } = getStoredTokens();
      if (accessToken && refreshToken) {
        try {
          await refreshAccessToken(refreshToken);
          // If successful, update user state
          setUser({ isAuthenticated: true });
        } catch (error) {
          setUser(null);
        }
      }
      setLoading(false);
    };

    initAuth();
  }, []);

  const handleLogout = async () => {
    await logout();
    removeTokens();
    setUser(null);
  };

  const value = {
    user,
    setUser,
    loading,
    logout: handleLogout,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};