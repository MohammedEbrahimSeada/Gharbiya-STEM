import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { getCookie, deleteCookie } from '../utils/cookies';

interface User {
  id?: string;
  name: string;
  email: string;
  grade?: number;
  code?: number;
  stemField?: string;
  avatar?: string;
  role?: string;
  // Add other fields that might come from the API response
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
  isAuthenticated: boolean;
  isInitializing: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUserState] = useState<User | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);

  // Load user from localStorage or cookie on initial render
  useEffect(() => {
    const initializeUser = async () => {
      try {
        // First, check if we have both acc_token and user_id cookies
        const accToken = getCookie('acc_token');
        const userId = getCookie('user_id');
        
        if (accToken && userId) {
          // Try to fetch user context from API using both user ID and cookie
          try {
            const response = await fetch(`http://localhost:8000/api/context/${userId}/${accToken}/`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json'
              },
              credentials: 'include' // Include cookies in the request
            });

            if (response.ok) {
              const contextData = await response.json();
              
              // Set user data from API response
              if (contextData.user) {
                const userData = {
                  id: contextData.user.id,
                  name: contextData.user.name || contextData.user.firstName + ' ' + contextData.user.lastName,
                  email: contextData.user.email,
                  grade: contextData.user.grade,
                  stemField: contextData.user.stemField,
                  avatar: contextData.user.avatar,
                  role: contextData.user.role
                };
                setUserState(userData);
                localStorage.setItem('user', JSON.stringify(userData));
                
                // Update token if provided
                if (contextData.token) {
                  localStorage.setItem('token', contextData.token);
                }
              }
            } else {
              // If API call fails, remove invalid cookies
              deleteCookie('acc_token');
              deleteCookie('user_id');
              console.warn('Invalid cookies, removing them');
            }
          } catch (apiError) {
            console.error('Error fetching user context from API:', apiError);
          }
        } else {
          // Fall back to localStorage if no cookie
          const storedUser = localStorage.getItem('user');
          if (storedUser) {
            try {
              setUserState(JSON.parse(storedUser));
            } catch (error) {
              console.error('Error parsing stored user data:', error);
              localStorage.removeItem('user');
            }
          }
        }
      } catch (error) {
        console.error('Error initializing user:', error);
      } finally {
        setIsInitializing(false);
      }
    };

    initializeUser();
  }, []);

  const setUser = (userData: User | null) => {
    setUserState(userData);
    if (userData) {
      localStorage.setItem('user', JSON.stringify(userData));
    } else {
      localStorage.removeItem('user');
    }
  };

  const logout = () => {
    setUserState(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token'); // Remove auth token if you're using one
    // Clear all authentication cookies
    deleteCookie('acc_token');
    deleteCookie('user_id');
  };

  const isAuthenticated = user !== null;

  return (
    <UserContext.Provider value={{ user, setUser, logout, isAuthenticated, isInitializing }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
