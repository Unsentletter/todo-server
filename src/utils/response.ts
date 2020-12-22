import { ErrorResponse, FailResponse, SuccessResponse } from '@src/typings/route.types';

export function successResponse<Data = null>(
  data: Data | null = null,
  message?: string,
): SuccessResponse<Data> {
  const content: SuccessResponse<Data> = {
    status: 'success',
    data,
    message,
  };
  return content;
}

export function failResponse<Data = null>(
  data: Data | null = null,
  message?: string,
): FailResponse<Data> {
  const content: FailResponse<Data> = {
    status: 'fail',
    data,
    message,
  };
  return content;
}

export function errorResponse<Data = null>(
  data: Data | null = null,
  message?: string,
): ErrorResponse<Data> {
  const content: ErrorResponse<Data> = {
    status: 'error',
    data,
    message,
  };
  return content;
}
