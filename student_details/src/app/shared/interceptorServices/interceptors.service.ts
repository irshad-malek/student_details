import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorsService implements HttpInterceptor{
//to pass headers each request and send static token 
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
   const token="57246542-96fe-1a63-e053-0824d011072a"
   localStorage.setItem('token-val',token)
    const modified = req.clone({setHeaders: {'token':token,'Custom-Header': 'Application/json'}});
    return next.handle(modified);
}
  constructor() { }
}
