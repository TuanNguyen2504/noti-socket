import axios, { CreateAxiosDefaults } from 'axios';
import https from 'https';
import getEnv from '~/utils/get-env';

function createAxiosInstance(baseURL: string, configs?: CreateAxiosDefaults<any>) {
  return axios.create({
    baseURL,
    httpsAgent: new https.Agent({ rejectUnauthorized: false }),
    proxy: false,
    ...configs
  });
}

export const cadshouseAuthAxios = createAxiosInstance(getEnv('CADSHOUSE_AUTH_URI'));

export default createAxiosInstance;
