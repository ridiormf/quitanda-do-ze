import {api} from '../axios';

export const getCategories = async () => {
  const response = await api.get('/categories');
  if (response?.data?.success === false) {
    return {error: response?.data?.msg};
  } else if (response?.status !== 200) {
    return {error: 'Houve algum erro ao tentar se conectar com o servidor.'};
  }
  return {error: null, categories: response.data};
};
