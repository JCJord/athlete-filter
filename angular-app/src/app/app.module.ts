import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component'
import { AthleteListComponent } from './athlete-list/athlete-list.component'
import { AthleteListService } from './athlete-list/athlete-list.service'
import { InterceptorComponent } from './interceptor/interceptor.component'

@NgModule({
  declarations: [AppComponent, AthleteListComponent, InterceptorComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [AthleteListService],
  bootstrap: [AppComponent]
})
export class AppModule {}
