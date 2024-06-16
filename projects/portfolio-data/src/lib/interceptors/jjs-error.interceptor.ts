import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, retry, throwError, timer } from 'rxjs';

export const jjsErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const shouldRetry = (error: HttpErrorResponse) => {
    if (error.status >= 500) {
      return timer(1000);
    }
    throw error;
  };

  return next(req).pipe(
    retry({
      count: 2,
      delay: (error) => {
        return shouldRetry(error)
      }
    }),
    catchError((error) => {
      return throwError(() => error)
    })
  );
};
