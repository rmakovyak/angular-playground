import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
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
  displayedMeasurements: any[];
  channel: any;
  filter: string = '';

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
          this.measurements = composeMeasurements(
            this.model.measurements,
            response.measurements
          );
          this.displayedMeasurements = filter(this.measurements, this.filter);

          const deviceIds = [];
          deviceIds.push(this.id);
          this.channel = new ChannelService({
            deviceIds,
            onMeasurementPublished: (message) => {
              this.measurements = composeMeasurements(
                this.model.measurements,
                getNextMeasurements(this.measurements, message)
              );
              this.displayedMeasurements = filter(
                this.measurements,
                this.filter
              );
            }
          });
          this.channel.connect();
        });
      });
    });
  }

  onSearchChange(value) {
    this.filter = value;
    this.displayedMeasurements = filter(this.measurements, this.filter);
  }

  onHistoryToggle(name) {
    this.measurements = this.measurements.map(
      (el) => (el.name === name ? { ...el, showHistory: !el.showHistory } : el)
    );

    this.displayedMeasurements = this.displayedMeasurements.map(
      (el) => (el.name === name ? { ...el, showHistory: !el.showHistory } : el)
    );
  }

  ngOnDestroy() {
    this.channel.disconnect();
  }
}

function getNextMeasurements(prevM, receivedM) {
  return prevM.map(
    (el) =>
      el.name === receivedM.data.name
        ? { ...receivedM.data, showHistory: el.showHistory }
        : el
  );
}

function composeMeasurements(model, measurements) {
  return measurements.map((measurement) => {
    const target = model.find((el) => el.name === measurement.name);
    return {
      ...measurement,
      ...target,
      showHistory: measurement.showHistory || false
    };
  });
}

function filter(measurements, filter) {
  if (filter === '') {
    return measurements;
  }
  return measurements.filter((el) =>
    el.displayName.toLowerCase().includes(filter.toLowerCase())
  );
}
