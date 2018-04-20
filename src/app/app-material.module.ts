import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatListModule,
  MatInputModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatListModule,
    MatInputModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatListModule,
    MatInputModule,
    MatCardModule
  ]
})
export class AppMaterialModule {}
