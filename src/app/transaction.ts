import { Category } from './category';

export class Transaction {
  amount: number;
  date: Date;
  type: TransactionTypes;
  category: Category;
}

export enum TransactionTypes {
  Income = 'INCOME',
  Expense = 'EXPENSE'
}
