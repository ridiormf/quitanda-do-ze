import {api} from '../axios';

export const searchProduct = async search => {
  const response = await api.get(`/products?search=${search}`);
  if (response?.data?.success === false) {
    return {error: response?.data?.msg};
  } else if (response?.status !== 200) {
    return {error: 'Houve algum erro ao tentar se conectar com o servidor.'};
  }
  return {error: null, products: Object.values(response.data)};
};
