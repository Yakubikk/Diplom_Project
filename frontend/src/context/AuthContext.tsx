'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import {useRouter, usePathname} from "@/i18n/routing";
import { User } from '@/models/user/user';

interface AuthContextProps {
  user: User | null;
  login: (user: User, remember: boolean) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const storedUser = localStorage.getItem('user') || sessionStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else if (pathname !== '/login' && pathname !== '/register') {
      router.push('/login');
    }
  }, [pathname, router]);

  const login = (userData: User, remember: boolean) => {
    setUser(userData);
    if (remember) localStorage.setItem('user', JSON.stringify(userData))
    else sessionStorage.setItem('user', JSON.stringify(userData));
    router.push('/');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('classIds');
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth должен быть использован внутри AuthProvider');
  }
  return context;
};
