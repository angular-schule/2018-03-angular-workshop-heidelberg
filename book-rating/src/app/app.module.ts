import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import localeDe from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { initIcons } from './fa-icons';
import { BookStoreService } from './shared/book-store.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'de' },
    BookStoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    initIcons();
    registerLocaleData(localeDe);
  }
}
