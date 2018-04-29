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
  MatProgressBarModule,
  MatSidenavModule,
  MatMenuModule,
  MatChipsModule
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
    MatProgressBarModule,
    MatSidenavModule,
    MatMenuModule,
    MatChipsModule
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
    MatProgressBarModule,
    MatSidenavModule,
    MatMenuModule,
    MatChipsModule
  ]
})
export class AppMaterialModule {}
