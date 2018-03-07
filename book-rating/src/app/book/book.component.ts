import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  @Input()
  book: Book;

  rateDown() {
    this.book.rateDown();
  }

  rateUp() {
    this.book.rateDown();
  }

  getStars() {
    return new Array(this.book.rating);
  }
}
