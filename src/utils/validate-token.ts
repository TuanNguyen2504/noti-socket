import to from 'await-to-js';
import { cadshouseAuthAxios } from '~/configs/axios-instance';
import { ENDPOINT } from '~/constants/endpoint';
import { KEYS } from '~/constants/key';
import { UserPermission } from '~/types/user-permission.type';
import getEnv from './get-env';

interface ValidateAuthTokenResult {
  user?: UserPermission | null;
  msg: string;
  isValid: boolean;
}

export default async function validateAuthToken(token?: string): Promise<ValidateAuthTokenResult> {
  token = token && token.startsWith(KEYS.AUTH_TYPE) ? token.replace(KEYS.AUTH_TYPE, '') : token;

  if (!token) {
    return { msg: 'Token not found', isValid: false, user: null };
  }

  if (token === getEnv('API_KEY')) {
    return { msg: '', isValid: true, user: null };
  }

  const [error, apiRes] = await to(
    cadshouseAuthAxios.get<UserPermission>(ENDPOINT.GET_USER_PERMISSION, { params: { token } })
  );

  if (error) return { msg: 'Token invalid', isValid: false, user: null };

  if (apiRes.status === 200) {
    return { isValid: true, msg: 'success', user: apiRes.data };
  }

  return { msg: 'Token invalid', isValid: false, user: null };
}
