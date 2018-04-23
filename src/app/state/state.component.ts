import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  AssetService,
  ModelService,
  DataService,
  ChannelService
} from 'cloud-browser-sdk';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  id: string;
  device: any;
  model: any;
  measurements: any[];
  channel: any;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    AssetService.getDevice(this.id).then((response) => {
      this.device = response;
      ModelService.getModelVersion(
        response.modelId,
        response.modelVersion
      ).then((response) => {
        this.model = response;

        DataService.getLatestMeasurements(this.id).then((response) => {
          this.measurements = response.measurements;

          const deviceIds = [];
          deviceIds.push(this.id);
          this.channel = new ChannelService({
            deviceIds,
            onMeasurementPublished: (message) => {
              this.measurements = this.measurements.map((el) => {
                if (el.name === message.data.name) {
                  return message.data;
                }

                return el;
              });
            }
          });
          this.channel.connect();
        });
      });
    });
  }
}
