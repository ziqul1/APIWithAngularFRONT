import { AppComponent } from './app.component';
import { FileWriteComponent } from './components/file-write/file-write.component';
import { FileReadComponent } from './components/file-read/file-read.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookAddAsyncComponent } from './components/book-add-async/book-add-async.component';
import { BookDeleteAsyncComponent } from './components/book-delete-async/book-delete-async.component';
import { BookGetAllAsyncComponent } from './components/book-get-all-async/book-get-all-async.component';
import { BookGetSingleAsyncComponent } from './components/book-get-single-async/book-get-single-async.component';
import { LoginFunctionsComponent } from './components/login-functions/login-functions.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'CreateBookAsync', component: BookAddAsyncComponent, canActivate: [AuthGuardService] },
  { path: 'DeleteBookAsync', component: BookDeleteAsyncComponent, canActivate: [AuthGuardService] },
  { path: 'GetSingleBookAsync', component: BookGetSingleAsyncComponent, canActivate: [AuthGuardService] },
  { path: 'GetBooksAsync', component: BookGetAllAsyncComponent, canActivate: [AuthGuardService] },
  { path: 'ReadFile', component: FileReadComponent, canActivate: [AuthGuardService] },
  { path: 'WriteFile', component: FileWriteComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
