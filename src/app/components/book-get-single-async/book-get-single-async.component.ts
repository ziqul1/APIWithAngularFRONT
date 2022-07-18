import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-get-single-async',
  templateUrl: './book-get-single-async.component.html',
  styleUrls: ['./book-get-single-async.component.css']
})
export class BookGetSingleAsyncComponent implements OnInit {

  book: Book = { id: 0, title: '', price: 0 };

  @Input() bookId: number = 0;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  GetSingleBookAsync() {
    this.bookService.GetSingleBookAsync(this.book.id)
      .subscribe(x => { this.book = x; }, error => console.log(error));
  }

}
