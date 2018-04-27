import { AngularFirestore } from 'angularfire2/firestore';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  items: Observable<any[]>;
  constructor(db: AngularFirestore) {
    const settings = { timestampsInSnapshots: true };
    db.app.firestore().settings(settings);
    this.items = db.collection('incomes').valueChanges();
  }
}
