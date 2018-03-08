import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { map, filter, debounceTime, distinctUntilChanged, take, scan, reduce, pairwise, buffer } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { interval } from 'rxjs/observable/interval';

@Component({
  selector: 'br-rxjs-playground',
  templateUrl: './rxjs-playground.component.html',
  styleUrls: ['./rxjs-playground.component.scss']
})
export class RxjsPlaygroundComponent implements OnInit {

  showSecond = false;

  subject$: Subject<number>;
  subjectPiped$: Observable<any>;

  cold$: Observable<any>;

  constructor() { }

  ngOnInit() {
    this.cold$ = interval(1000);


    this.subject$ = new Subject<number>();

    this.subject$.subscribe(e => console.log(e));

    this.subjectPiped$ = this.subject$.pipe(
      // map(e => e * 3),
      // filter(e => e % 2 === 0)
      // debounceTime(1000)
      // distinctUntilChanged(),
      // take(5),
      // reduce((acc, item) => acc + item, 0)
      // pairwise()
      buffer(interval(2000))
    );

    this.subjectPiped$.subscribe(
      e => console.log('PIPED', e),
      err => console.log('ERROR', err),
      () => console.log('COMPLETE')
    );


  }


  sendRandom() {
    const random = Math.floor(Math.random() * 100);
    this.subject$.next(random);
  }

  send42() {
    this.subject$.next(42);
  }

}
