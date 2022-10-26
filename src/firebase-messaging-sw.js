// importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging.js');


import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging/sw";

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
const firebaseApp = initializeApp({
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE__PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE__STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE__MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE__APP_ID,
  databaseURL: "https://yourdb.com",
  measurementId: "X-12468cujk"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = getMessaging(firebaseApp);

// firebase.initializeApp({
//   apiKey: REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE__PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE__STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE__MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE__APP_ID,
//   databaseURL: "https://yourdb.com",
//   measurementId: "X-12468cujk"
// });

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
// const messaging = firebase.messaging();

// messaging.setBackgroundMessageHandler(function (payload) {
//   const promiseChain = clients
//     .matchAll({
//       type: "window",
//       includeUncontrolled: true,
//     })
//     .then((windowClients) => {
//       for (let i = 0; i < windowClients.length; i++) {
//         const windowClient = windowClients[i];
//         windowClient.postMessage(payload);
//       }
//     })
//     .then(() => {
//       return registration.showNotification("my notification title ");
//     });
//   return promiseChain;
// });

// self.addEventListener("notificationclick", function (event) {
//   console.log(event);
// });

// messaging.onBackgroundMessage(function(payload) {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
//   // Customize notification here
//   const notificationTitle = 'Background Message Title';
//   const notificationOptions = {
//     body: 'Background Message body.',
//     // icon: '/firebase-logo.png'
//   };

//   self.registration.showNotification(notificationTitle,
//     notificationOptions);
// });
