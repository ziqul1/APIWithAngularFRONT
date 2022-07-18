import { FileWriteComponent } from './components/file-write/file-write.component';
import { FileReadComponent } from './components/file-read/file-read.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookAddAsyncComponent } from './components/book-add-async/book-add-async.component';
import { BookDeleteAsyncComponent } from './components/book-delete-async/book-delete-async.component';
import { BookGetAllAsyncComponent } from './components/book-get-all-async/book-get-all-async.component';
import { BookGetSingleAsyncComponent } from './components/book-get-single-async/book-get-single-async.component';

const routes: Routes = [
  { path: 'CreateBookAsync', component: BookAddAsyncComponent },
  { path: 'DeleteBookAsync', component: BookDeleteAsyncComponent },
  { path: 'GetSingleBookAsync', component: BookGetSingleAsyncComponent },
  { path: 'GetBooksAsync', component: BookGetAllAsyncComponent },
  { path: 'ReadFile', component: FileReadComponent },
  { path: 'WriteFile', component: FileWriteComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
