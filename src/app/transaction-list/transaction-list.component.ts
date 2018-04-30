import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  transactions: Transaction[];

  constructor(public transactionService: TransactionService) {}

  ngOnInit() {
    this.transactionService
      .getTransactions()
      .subscribe((response) => (this.transactions = response));
  }

  addTransaction(e) {
    console.log(e);
  }
}
