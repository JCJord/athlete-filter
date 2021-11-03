import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AthleteListComponent } from './athlete-list/athlete-list.component';
import { InterceptorComponent } from './interceptor/interceptor.component';

@NgModule({
  declarations: [
    AppComponent,
    AthleteListComponent,
    InterceptorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
