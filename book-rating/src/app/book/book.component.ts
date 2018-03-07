import { Component, OnInit, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  @Input()
  book: Book;

  @Output()
  rated = new EventEmitter<Book>();

  rateDown() {
    this.book.rateDown();
    this.rated.emit(this.book);
  }

  rateUp() {
    this.book.rateUp();
    this.rated.emit(this.book);
  }

  getStars() {
    return new Array(this.book.rating);
  }
}
