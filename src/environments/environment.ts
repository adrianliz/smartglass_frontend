// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
	firebase: {
		apiKey: 'AIzaSyCmHNQozQLAt_0EZ4mKj9UP2ZjKJ7XGvKA',
		authDomain: 'smartglass-b3a57.firebaseapp.com',
		databaseURL: 'https://smartglass-b3a57-default-rtdb.firebaseio.com',
		authBaseURL: 'https://identitytoolkit.googleapis.com/v1',
		projectId: 'smartglass-b3a57',
		storageBucket: 'smartglass-b3a57.appspot.com',
		messagingSenderId: '616933049630',
		appId: '1:616933049630:web:2769b7668a3d69f08a350f',
		measurementId: 'G-DJ61MPG2SX',
	},
	twinsBaseURL: 'http://155.210.68.101:8080/twins',
	statisticsBaseURL: 'http://155.210.68.101:8080/statistics',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
