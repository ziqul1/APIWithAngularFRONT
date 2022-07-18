import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookAddAsyncComponent } from './components/book-add-async/book-add-async.component';
import { BookGetAllAsyncComponent } from './components/book-get-all-async/book-get-all-async.component';
import { BookGetSingleAsyncComponent } from './components/book-get-single-async/book-get-single-async.component';
import { BookFunctionsComponent } from './components/book-functions/book-functions.component';
import { BookDeleteAsyncComponent } from './components/book-delete-async/book-delete-async.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BookAddAsyncComponent,
    BookDeleteAsyncComponent,
    BookGetAllAsyncComponent,
    BookGetSingleAsyncComponent,
    BookFunctionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
