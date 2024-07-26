import api from '../../../api';

interface LoginParams {
  username: string;
  password: string;
}

export const login = async (params: LoginParams) => {
  const response = await api.post('/auth/login', params);
  return response.data.token;
};
