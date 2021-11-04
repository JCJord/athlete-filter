import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppComponent } from './app.component'
import { AthleteListComponent } from './athlete-list/athlete-list.component'
import { AthleteListService } from './athlete-list/athlete-list.service'
import { InterceptorComponent } from './interceptor/interceptor.component'
import { CustomresponseInterceptor } from './customresponse.interceptor'

@NgModule({
  declarations: [AppComponent, AthleteListComponent, InterceptorComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [
    AthleteListService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomresponseInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
