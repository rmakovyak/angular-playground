// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAkiFYY79sMXq8uvpi51TFE3mPKToxMY60',
    authDomain: 'budget-tracker-6107c.firebaseapp.com',
    databaseURL: 'https://budget-tracker-6107c.firebaseio.com',
    projectId: 'budget-tracker-6107c',
    storageBucket: 'budget-tracker-6107c.appspot.com',
    messagingSenderId: '169439106777'
  }
};
