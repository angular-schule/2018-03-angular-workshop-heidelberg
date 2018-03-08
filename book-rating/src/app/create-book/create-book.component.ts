import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {

  form: FormGroup;

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
}
