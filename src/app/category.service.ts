import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Category } from './category';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {
  private categoriesCollection: AngularFirestoreCollection<Category>;

  constructor(public db: AngularFirestore) {
    const settings = { timestampsInSnapshots: true };
    db.app.firestore().settings(settings);
    this.categoriesCollection = db.collection<Category>('categories');
  }

  getCategories() {
    return this.categoriesCollection.snapshotChanges().map(categories =>
      categories.map(a => {
        const data = a.payload.doc.data() as Category;
        const docId = a.payload.doc.id;
        return { docId, ...data };
      })
    );
  }

  create(category: Category) {
    this.categoriesCollection.add(JSON.parse(JSON.stringify(category)));
  }

  delete(docId: string) {
    const categoryDoc = this.db.doc<Category>(`categories/${docId}`);
    categoryDoc.delete();
  }
}
