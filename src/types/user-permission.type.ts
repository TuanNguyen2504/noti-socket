export interface UserPermission {
  code: number;
  username: string;
  email: string;
  fullName: string;
  access_token: string;
  exp: string;
  'origin-request': string;
  userPermission: Array<{
    group: string;
    apps: Array<{
      name: string;
      realm: string;
      attributes: any;
      authorizeCode: string;
      requestDomain: string;
    }>;
  }>;
}
