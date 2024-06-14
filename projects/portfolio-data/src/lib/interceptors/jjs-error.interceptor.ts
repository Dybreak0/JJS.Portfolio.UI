import { HttpInterceptorFn } from '@angular/common/http';

export const jjsErrorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
