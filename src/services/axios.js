import {create} from 'axios';

export const api = create({
  baseURL: 'https://api.teste.appit.com.br',
  timeout: 10000,
});
