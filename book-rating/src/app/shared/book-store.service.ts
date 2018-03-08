import { Injectable } from '@angular/core';
import { Book, BookResponse } from './book';
import { HttpClient } from '@angular/common/http';
import { map, catchError, retry } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';


@Injectable()
export class BookStoreService {

  constructor(private http: HttpClient) {  }

  apiUrl = 'https://api.angular.schule';

  getAll() {
    return this.http
      .get<BookResponse[]>(`${ this.apiUrl }/books`)
      .pipe(
        retry(5),
        catchError(error => of([new Book('0', 'Etwas ist schief gelaufen!', '', 0)])),
        map(rawBooks => rawBooks
          .map(b => new Book(b.isbn, b.title, b.description, b.rating)))
      );
  }

  getAllStatic(): Book[] {
    return [
      new Book('000', 'Angular', 'Grundlagen, fortgeschritttene Techniken, ...', 5),
      new Book('111', 'React', 'Ein anderes Framework', 3),
      new Book('111', 'Vue.js', 'Ganz neu und grün', 2)
    ];
  }

}
