import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/concatAll';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const button = document.getElementById('button');
    const clicks = Observable.fromEvent(button, 'click');
    const points = clicks.map((e: any) => ({ x: e.clientX, y: e.clientY }));

    const subscription = points.subscribe(
      function onNext(next) {
        alert(`clicked${JSON.stringify(next)}`);
        // subscription.unsubscribe();
      },
      function onError(e) {
        console.log('ERROR');
      },
      function onCompleted() {
        console.log('ERROR');
      }
    );

    const parent = document.getElementById('parent');
    const widget = document.getElementById('widget');

    const mouseDowns = Observable.fromEvent(widget, 'mousedown');
    const parentMouseMoves = Observable.fromEvent(widget, 'mousemove');
    const parentMouseUps = Observable.fromEvent(widget, 'mouseup');

    const drags = mouseDowns
      .map((e) => {
        return parentMouseMoves.takeUntil(parentMouseUps);
      })
      .concatAll();

    drags.subscribe((e: any) => {
      console.log(e);
      widget.style.left = e.clientX + 'px';
      widget.style.top = e.clientY + 'px';
    });
  }
}
