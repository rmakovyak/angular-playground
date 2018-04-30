import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Transaction, Categories, TransactionTypes } from '../transaction';

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
  amount: any;
  category: Categories;
  date = new Date();
  type: any;
  constructor(public transactionService: TransactionService) {}

  ngOnInit() {}

  createTransaction(e) {
    e.preventDefault();

    if (!this.amount.invalid || !this.type.invalid) {
      this.transactionService.create({
        amount: this.amount,
        category: this.category,
        type: this.type,
        date: new Date(this.date)
      });
    }
  }
}
