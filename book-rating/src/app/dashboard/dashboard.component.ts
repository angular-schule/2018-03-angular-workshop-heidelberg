import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  url = 'https://angular.schule';
  d = new Date();
  books: Book[];

  constructor(private bs: BookStoreService) {}

  ngOnInit() {
    this.books = this.bs.getAllStatic();
    this.reorderBooks();
  }

  reorderBooks(book?: Book) {
    console.log('Folgendes Buch hat getriggert', book);
    this.books.sort((a, b) => b.rating - a.rating);
  }

}
