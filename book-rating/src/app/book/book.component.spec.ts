import { Book } from './../shared/book';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';
import { By } from '@angular/platform-browser';

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

    component.book = {
      title: 'Test',
      description: '',
      rating: 1,
      rateUp: () => { }
    } as Book;

    spyOn(component.book, 'rateUp');
    fixture.detectChanges();
  });

  it('should call book.rateUp on component.rateUp', () => {
    component.rateUp();
    expect(component.book.rateUp).toHaveBeenCalled();
  });

  it('should call book.rateUp on button click', () => {
    const myButton = fixture.debugElement.query(By.css('[test-rateUpButton]'));
    myButton.nativeElement.click();
    expect(component.book.rateUp).toHaveBeenCalled();
  });
});
