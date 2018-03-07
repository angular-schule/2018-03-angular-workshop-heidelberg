import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable()
export class BookStoreService {

  constructor() { }

  getAllStatic(): Book[] {
    return [
      new Book('000', 'Angular', 'Grundlagen, fortgeschritttene Techniken, ...', 5),
      new Book('111', 'React', 'Ein anderes Framework', 3),
      new Book('111', 'Vue.js', 'Ganz neu und grün', 2)
    ];
  }

}
