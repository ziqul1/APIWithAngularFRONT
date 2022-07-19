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
import { FileReadComponent } from './components/file-read/file-read.component';
import { FileWriteComponent } from './components/file-write/file-write.component';
import { FileFunctionsComponent } from './components/file-functions/file-functions.component';
import { JwtModule } from "@auth0/angular-jwt";
import { LoginComponent } from './components/login/login.component';
import { LoginFunctionsComponent } from './components/login-functions/login-functions.component';
import { AuthGuardService } from './guards/auth-guard.service';

export function tokenGetter() { 
  return localStorage.getItem("jwt"); 
}

@NgModule({
  declarations: [
    AppComponent,
    BookAddAsyncComponent,
    BookDeleteAsyncComponent,
    BookGetAllAsyncComponent,
    BookGetSingleAsyncComponent,
    BookFunctionsComponent,
    FileReadComponent,
    FileWriteComponent,
    FileFunctionsComponent,
    LoginComponent,
    LoginFunctionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:7185"],
        disallowedRoutes: []
      }
    })
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
