export class Book {

  constructor(
    public isbn: string,
    public title: string,
    public description: string,
    public rating = 1,
  ) {
  }

  rateUp() {
    if (this.rating < 5) {
      this.rating++;
    }
  }

  rateDown() {
    if (this.rating > 1) {
      this.rating--;
    }
  }
}

export interface BookResponse {
  isbn: string;
  title: string;
  description: string;
  rating: number;
}
