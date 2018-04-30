import { Observable } from 'rxjs/Observable';
import { filter } from 'rxjs/operators';
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
  displayedTransactions: Observable<Transaction[]>;
  from: number = 0;
  to: number = new Date('01/01/2050').getTime();

  constructor(db: AngularFirestore) {
    const settings = { timestampsInSnapshots: true };
    db.app.firestore().settings(settings);
    this.transactionsCollection = db.collection<Transaction>('transactions');

    this.transactions = this.transactionsCollection
      .snapshotChanges()
      .map((transactions) => {
        return this.transformTransactions(transactions);
      });
  }

  transformTransactions(transactions) {
    return transactions.map((a) => {
      const data = a.payload.doc.data() as any;
      const id = a.payload.doc.id;
      return {
        id,
        ...data,
        timestamp: new Date(data.timestamp.seconds * 1000)
      };
    });
  }

  addTransaction(e) {
    console.log(e);
  }

  filterByDate(date: string, period: string) {
    const time = new Date(date).getTime();

    if (period === 'from') {
      this.from = time;
    } else {
      this.to = time;
    }

    this.transactions = this.transactionsCollection
      .snapshotChanges()
      .map((transactions) => {
        return this.transformTransactions(transactions).filter(
          (el) =>
            new Date(el.timestamp).getTime() >= this.from &&
            new Date(el.timestamp).getTime() <= this.to
        );
      });
  }

  ngOnInit() {}
}
