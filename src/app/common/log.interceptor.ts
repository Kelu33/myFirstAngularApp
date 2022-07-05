import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from  '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable()
export  class  LogInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const start: number = performance.now();
        console.log(`Target url : ${req.urlWithParams}`);

        return  next.handle(req).pipe(
            tap((response) => {
                if ( response instanceof HttpResponse ) {
                    const then: number = performance.now();
                    console.log(`Runtime : ${then - start} ms`);
                }
            })
        );
    }
}
