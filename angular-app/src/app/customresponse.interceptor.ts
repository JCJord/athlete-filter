import { Injectable } from '@angular/core'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable()
export class CustomresponseInterceptor implements HttpInterceptor {
  intercept (
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.url.endsWith('olympic-winners.json')) {
      return next.handle(request).pipe(
        map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            if (event.body) {
              ;(event.body as String) = event.body.filter(
                (p: any) => p.country === 'Brazil'
              )
            }
          }

          return event
        })
      )
    }

    return next.handle(request)
  }
}
