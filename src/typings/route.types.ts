import { Router } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';

export interface RouteGroup {
  basePath: string;
  router: Router;
}

/**
 * Generic helper typing for route path parameters
 * e.g. /users/:userId
 */
export type PathParams<Params> = ParamsDictionary & Params;

/**
 * Based on JSend pattern
 * https://github.com/omniti-labs/jsend
 */
export interface GenericResponse<Status = 'success' | ' fail' | 'error', Data = unknown> {
  status: Status;
  data: Data;
  message?: string;
}

export type SuccessResponse<Data> = GenericResponse<'success', Data>;
export type FailResponse<Data> = GenericResponse<'fail', Data>;
export type ErrorResponse<Data> = GenericResponse<'error', Data>;
