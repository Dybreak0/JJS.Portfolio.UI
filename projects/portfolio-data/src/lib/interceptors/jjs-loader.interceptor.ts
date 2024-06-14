import { HttpEvent, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, finalize } from 'rxjs';
import { JjsLoaderService } from '../services/jjs-loader.service';

export const jjsLoaderInterceptor: HttpInterceptorFn = (req, next): Observable<HttpEvent<unknown>> => {
  const loadingService: JjsLoaderService = inject(JjsLoaderService);
  loadingService.show();
    return next(req).pipe(
      finalize(() => {
        loadingService.hide();
      })
    );
};

