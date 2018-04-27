export class Transaction {
  id: string;
  value: number;
  timestamp: number;
  type: TransactionTypes;
  category: Categories;
}

enum TransactionTypes {
  Income = 'INCOME',
  Expense = 'EXPENSE'
}

enum Categories {
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
