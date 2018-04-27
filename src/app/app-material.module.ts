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
  MatMenuModule
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
    MatMenuModule
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
    MatMenuModule
  ]
})
export class AppMaterialModule {}
