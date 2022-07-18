import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-delete-async',
  templateUrl: './book-delete-async.component.html',
  styleUrls: ['./book-delete-async.component.css']
})
export class BookDeleteAsyncComponent implements OnInit {

  book: Book = { id: 0, title: '', price: 0 };

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  DeleteBookAsync() {
    this.bookService.DeleteBookAsync(this.book.id).subscribe();
  }

}
