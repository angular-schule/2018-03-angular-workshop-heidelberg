import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, LOCALE_ID } from '@angular/core';
import localeDe from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { initIcons } from './fa-icons';
import { BookStoreService } from './shared/book-store.service';
import { HttpClientModule } from '@angular/common/http';
import { RxjsPlaygroundComponent } from './rxjs-playground/rxjs-playground.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { BookDetailsComponent } from './book-details/book-details.component';


@NgModule({
  declarations: [  // Components, Pipes, Direktiven werden deklariert
    AppComponent,
    DashboardComponent,
    BookComponent,
    RxjsPlaygroundComponent,
    CreateBookComponent,
    BookDetailsComponent
  ],
  imports: [   // Module werden importiert!
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [  // Services werden provided
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
