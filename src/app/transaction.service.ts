import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Transaction } from './transaction';
import 'rxjs/add/operator/map';

@Injectable()
export class TransactionService {
  private transactionsCollection: AngularFirestoreCollection<Transaction>;

  constructor(public db: AngularFirestore) {
    const settings = { timestampsInSnapshots: true };
    db.app.firestore().settings(settings);
    this.transactionsCollection = db.collection<Transaction>('transactions');
  }

  getTransactions() {
    return this.transactionsCollection.snapshotChanges().map((transactions) =>
      transactions.map((a) => {
        const data = a.payload.doc.data() as Transaction;
        const docId = a.payload.doc.id;
        return { docId, ...data };
      })
    );
  }

  create(transaction: Transaction) {
    this.transactionsCollection.add(JSON.parse(JSON.stringify(transaction)));
  }

  delete(docId: string) {
    const transactionDoc = this.db.doc<Transaction>(`transactions/${docId}`);
    transactionDoc.delete();
  }
}
