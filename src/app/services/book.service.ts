import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})

export class BookService {

  constructor(
    private http: HttpClient
  ) { }

  private bookURL = 'https://localhost:7185/api/BooksDTO';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  GetBooksAsync(): Observable<Book[]> {
    return this.http.get<Book[]>(this.bookURL);
  }

  GetSingleBookAsync(id: number): Observable<Book> {
    return this.http.get<Book>(this.bookURL + "/" + id);
  }

  CreateBookAsync(book: Book): Observable<Book> {
    return this.http.post<Book>(this.bookURL, book, this.httpOptions);
  }

  DeleteBookAsync(id: number): Observable<Book> {
    return this.http.delete<Book>(this.bookURL + "/" + id);
  }

}
