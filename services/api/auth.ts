import { LoginFormData, RegisterFormData } from '@/types/auth';
import { api } from '@/services/api/api';

// функція реєстрації
export const registerUser = async (data: RegisterFormData) => {
  const response = await api.post('/api/user/register', data);
  return response.data;
};

// функція логіну
export const loginUser = async (data: LoginFormData) => {
  const response = await api.post('/api/user/login', data);
  return response.data;
};
