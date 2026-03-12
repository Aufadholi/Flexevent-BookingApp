import React, { createContext, ReactNode, useContext, useState } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  login: (phone: string, password: string) => boolean;
  logout: () => void;
  register: (phone: string, email: string, password: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (phone: string, password: string): boolean => {
    // Simple validation for demo
    if (phone && password) {
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  const register = (phone: string, email: string, password: string): boolean => {
    // Simple validation for demo
    if (phone && email && password) {
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
