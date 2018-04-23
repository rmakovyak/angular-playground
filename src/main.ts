import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { Authorization } from 'cloud-browser-sdk';

import 'hammerjs';

if (environment.production) {
  enableProdMode();
}

Authorization.setEnvironment({
  authUrl: 'stg-login.relayr.io',
  apiUrl: 'stg-cloud.relayr.io',
  clientId: 'asset-services-dashboard'
});

Authorization.login()
  .then((response) => response)
  .then((apConfig) => {
    platformBrowserDynamic()
      .bootstrapModule(AppModule)
      .catch((err) => console.log(err));
  });
