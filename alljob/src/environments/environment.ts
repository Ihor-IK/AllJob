import { Environment } from './interface';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  firebase: {
    apiKey: 'AIzaSyBMtwtbbRtUG7Z-KHxZhA8eXu5NrXEF-Yw',
    authDomain: "alljob-56745.firebaseapp.com",
    databaseURL: "https://alljob-56745.firebaseio.com",
    projectId: "alljob-56745",
    storageBucket: "alljob-56745.appspot.com",
    messagingSenderId: "315079769013",
    appId: "1:315079769013:web:d066b4a9729077b30337fc"
  }
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
