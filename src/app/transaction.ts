export class Transaction {
  id: string;
  value: number;
  date: Date;
  type: TransactionTypes;
  category: Categories;
}

export enum TransactionTypes {
  Income = 'INCOME',
  Expense = 'EXPENSE'
}

export enum Categories {
  Rent = 'RENT',
  Internet = 'INTERNET',
  Radio = 'RADIO',
  Electricity = 'ELECTRICITY',
  Subscriptions = 'SUBSCRIPTIONS',
  Groceries = 'GROCERIES',
  Drogerie = 'DROGERIE',
  PublicTransporation = 'PUBLIC_TRANSPORTATION',
  Beauty = 'BEAUTY',
  Lunch = 'LUNCH',
  EatingOut = 'EATING_OUT',
  Fun = 'FUN',
  Other = 'OTHER'
}
