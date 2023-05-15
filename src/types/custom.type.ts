import { Request, Response } from 'express';
import { UserPermission } from './user-permission.type';

export interface CustomRequest extends Request {
  user?: UserPermission;
}

export type CustomResponse = Response;
