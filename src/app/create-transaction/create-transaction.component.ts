import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Transaction, TransactionTypes } from '../transaction';
import { CategoryService } from '../category.service';
import { Category } from '../category';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.scss']
})
export class CreateTransactionComponent implements OnInit {
  categories: Category[];
  types = ['INCOME', 'EXPENSE'];

  amountModel: any;
  typeModel: any;
  categoryModel: Category;
  dateModel = new Date();

  constructor(
    public transactionService: TransactionService,
    public categoryService: CategoryService
  ) {}

  ngOnInit() {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response;
    });
  }

  createTransaction(e) {
    e.preventDefault();

    if (!this.amountModel.invalid || !this.typeModel.invalid) {
      this.transactionService.create({
        amount: this.amountModel,
        category: this.categoryModel || { id: '', value: '' },
        type: this.typeModel,
        date: new Date(this.dateModel)
      });
    }
  }
}
