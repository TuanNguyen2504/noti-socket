import getEnv from '~/utils/get-env';

export const BASE_URL = '';
export const SERVER_PORT = Number(getEnv('PORT') || 3000);
