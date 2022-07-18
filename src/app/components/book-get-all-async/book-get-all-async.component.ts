import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-get-all-async',
  templateUrl: './book-get-all-async.component.html',
  styleUrls: ['./book-get-all-async.component.css']
})
export class BookGetAllAsyncComponent implements OnInit {

  books: Book[] = []; 

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.GetBooksAsync();
  }

  GetBooksAsync() {
    this.bookService.GetBooksAsync().subscribe(x => this.books = x);
  }

}
