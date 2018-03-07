import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  url = 'https://angular.schule';
  d = new Date();
  books: Book[];

  ngOnInit() {
    this.books = [
      new Book('000', 'Angular', 'Grundlagen, fortgeschritttene Techniken, ...', 5),
      new Book('111', 'React', 'Ein anderes Framework', 3)
    ];
    this.reorderBooks();
  }

  reorderBooks(book?: Book) {
    console.log('Folgendes Buch hat getriggert', book);
    this.books.sort((a, b) => b.rating - a.rating);
  }

}
