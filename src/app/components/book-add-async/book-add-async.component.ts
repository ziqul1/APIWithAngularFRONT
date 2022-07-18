import { BookService } from '../../services/book.service';
import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-book-add-async',
  templateUrl: './book-add-async.component.html',
  styleUrls: ['./book-add-async.component.css']
})

export class BookAddAsyncComponent implements OnInit {

  book: Book = { id: 0, title: '', price: 0 };

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  CreateBookAsync() {
    this.bookService.CreateBookAsync(this.book).subscribe();
  }

}
