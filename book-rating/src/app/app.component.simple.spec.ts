import { AppComponent } from './app.component';

describe('AppComponent', () => {

  it('should display the text "book rating"', () => {
    const comp = new AppComponent();
    expect(comp.title).toBe('Book Rating');
  });
});
