import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categoryModel: any;
  categories: Category[];
  constructor(public categoryService: CategoryService) {}

  ngOnInit() {
    this.categoryService
      .getCategories()
      .subscribe(response => (this.categories = response));
  }

  createCategory(e) {
    e.preventDefault();

    if (!this.categoryModel.invalid) {
      this.categoryService.create({
        id: this.categoryModel.toUpperCase().replace(' ', '_'),
        value: this.categoryModel
      });
      this.categoryModel = null;
    }
  }
}
