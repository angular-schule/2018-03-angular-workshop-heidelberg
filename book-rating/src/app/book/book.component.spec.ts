import { Book } from './../shared/book';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
  });

  it('should call book.rateUp on component.rateUp', () => {

    component.book = {
      title: 'Test',
      description: '',
      rating: 1,
      rateUp: () => { }
    } as Book;

    spyOn(component.book, 'rateUp');
    fixture.detectChanges();

    component.rateUp();
    expect(component.book.rateUp).toHaveBeenCalled();

  });
});
