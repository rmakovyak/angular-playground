import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.scss']
})
export class CreateTransactionComponent implements OnInit {
  categories = [
    'RENT',
    'INTERNET',
    'RADIO',
    'ELECTRICITY',
    'SUBSCRIPTIONS',
    'GROCERIES',
    'DROGERIE',
    'PUBLIC_TRANSPORTATION',
    'BEAUTY',
    'LUNCH',
    'EATING_OUT',
    'FUN',
    'OTHER'
  ];
  types = ['INCOME', 'EXPENSE'];
  amount;
  category;
  date;
  type;
  constructor(public transactionService: TransactionService) {}

  ngOnInit() {}

  createTransaction(e) {
    e.preventDefault();
    this.transactionService.create(new Transaction());
  }
}
