import { axiosInstance } from './axios';

export const membersApi = {
  signUp: (payload: any) => axiosInstance.post('/members/signup', payload),
  signIn: (payload: any) => axiosInstance.post('/members/signin', payload),
  findPassword : (payload: any) => axiosInstance.post('/members/reset-password-request', payload),
};
