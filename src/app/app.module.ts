import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCALE_ID, NgModule } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { BaseComponent } from './layout/base/base.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { BaseHttpInterceptor } from './shared/base-http-interceptor';
import { registerLocaleData } from '@angular/common';
import localeId from '@angular/common/locales/id';
registerLocaleData(localeId, 'id');

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BaseComponent,
    DashboardComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BaseHttpInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'id-ID' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
