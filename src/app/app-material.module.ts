import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatListModule,
  MatInputModule,
  MatCardModule,
  MatGridListModule,
  MatTableModule,
  MatIconModule,
  MatProgressBarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatListModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    MatIconModule,
    MatProgressBarModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatListModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    MatIconModule,
    MatProgressBarModule
  ]
})
export class AppMaterialModule {}
