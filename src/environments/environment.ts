// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


export const environment = {
  production: false,

  // Your web app's Firebase configuration

  firebaseConfig: {
  apiKey: "AIzaSyAe70aTgUWarvZFaPPSzDDkaP-wYfZQ3tg",
  authDomain: "achat-list.firebaseapp.com",
  projectId: "achat-list",
  storageBucket: "achat-list.appspot.com",
  messagingSenderId: "764651496392",
  appId: "1:764651496392:web:5403bd4c2d4e2d9bafd6fd"
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
