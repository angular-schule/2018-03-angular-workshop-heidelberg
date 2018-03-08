import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';
import { Observable } from 'rxjs/Observable';
import { share } from 'rxjs/operators';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  url = 'https://angular.schule';
  d = new Date();
  books: Book[] = []; // !

  books$: Observable<Book[]>;

  constructor(private bs: BookStoreService) {}

  ngOnInit() {
    this.books$ = this.bs.getAll().pipe(
      // share()
    );


    this.bs.getAll().subscribe(books => {
      this.books = books;
      this.reorderBooks();
    },
    error => console.log('Fehler :-(', error));



  }

  reorderBooks(book?: Book) {
    console.log('Folgendes Buch hat getriggert', book);
    this.books.sort((a, b) => b.rating - a.rating);
  }

  createBook(book: Book) {
    this.books.push(book);
    // this.bs.create(book).subscribe(/* ..*/)
    this.reorderBooks();
  }

}
