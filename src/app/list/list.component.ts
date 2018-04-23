import { Component, OnInit } from '@angular/core';
import { AssetService } from 'cloud-browser-sdk';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  constructor() {}

  devices: any[];
  columnsToDisplay = ['id', 'name', 'actions'];

  ngOnInit() {
    this.getDevices();
  }

  getDevices() {
    AssetService.getDevices().then((response) => {
      this.devices = response.data;
    });
  }
}
