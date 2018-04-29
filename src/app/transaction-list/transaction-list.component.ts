import { Observable } from 'rxjs/Observable';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';

import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  private transactionsCollection: AngularFirestoreCollection<Transaction>;
  transactions: Observable<Transaction[]>;

  constructor(db: AngularFirestore) {
    const settings = { timestampsInSnapshots: true };
    db.app.firestore().settings(settings);
    this.transactionsCollection = db.collection<Transaction>('transactions');

    this.transactions = this.transactionsCollection
      .snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Transaction;
          const id = a.payload.doc.id;
          return {
            id,
            ...data,
            timestamp: new Date(data.timestamp.seconds * 1000)
          };
        });
      });
  }

  addTransaction(e) {
    console.log(e);
  }

  onFromChange(from) {
    console.log(from);
    // need RxJS for this
  }

  onToChange(to) {
    console.log(to);
    // need RxJS for this
  }

  ngOnInit() {}
}
