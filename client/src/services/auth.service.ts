import api from './api';

export interface RegisterData {
  email: string;
  password: string;
  name: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface AuthResponse {
  message: string;
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}

/**
 * Register a new user
 */
export const register = async (data: RegisterData): Promise<AuthResponse> => {
  const response = await api.post('/api/auth/register', data);
  return response.data;
};

/**
 * Login user
 */
export const login = async (data: LoginData): Promise<AuthResponse> => {
  const response = await api.post('/api/auth/login', data);
  return response.data;
};

/**
 * Save auth token to localStorage
 */
export const saveToken = (token: string): void => {
  localStorage.setItem('token', token);
};

/**
 * Get auth token from localStorage
 */
export const getToken = (): string | null => {
  return localStorage.getItem('token');
};

/**
 * Remove auth token (logout)
 */
export const removeToken = (): void => {
  localStorage.removeItem('token');
};

/**
 * Check if user is logged in
 */
export const isAuthenticated = (): boolean => {
  return !!getToken();
};