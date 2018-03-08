import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Book } from '../shared/book';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {

  form: FormGroup;

  @Output() bookCreated = new EventEmitter<Book>();

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      isbn:        new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ]),
      title:       new FormControl('', Validators.required),
      description: new FormControl(''),
    });

    console.log(this.form);
  }

  hasMinLengthError(name: string) {
    const ctrl = this.form.get(name);
    return ctrl.errors &&
      ctrl.errors.minlength &&
      ctrl.touched;
  }

  submitForm() {
    const value = this.form.value;
    const book = new Book(
      value.isbn,
      value.title,
      value.description
    );

    this.bookCreated.emit(book);
  }
}
