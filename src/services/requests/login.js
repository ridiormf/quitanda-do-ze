import {api} from '../axios';

export const login = async (username, password) => {
  const response = await api.post('/login', {username, password});
  if (response?.data?.success === false) {
    return response?.data?.msg;
  } else if (response?.status !== 200) {
    return 'Houve algum erro ao tentar se conectar com o servidor.';
  }
  return null;
};
