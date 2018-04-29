import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { getMatInputUnsupportedTypeError } from '@angular/material';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
  @Input() title: string;
  @Input() showActionButton: boolean;
  @Input() actionButtonText: string;

  @Output() actionClick: EventEmitter<any> = new EventEmitter();

  actionWasClicked(title: string): void {
    this.actionClick.emit(title);
  }

  constructor() {}

  ngOnInit() {}
}
