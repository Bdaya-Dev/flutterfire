importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: 'AIzaSyCYiC7cSTeV0dnsM-SfscK2UOYwvc75TBE',
  appId: '1:924349514547:web:0f9263475ed666ea76b446',
  messagingSenderId: '924349514547',
  projectId: 'digital-design-meal-planning',
  authDomain: 'digital-design-meal-planning.firebaseapp.com',
  storageBucket: 'digital-design-meal-planning.appspot.com',
  measurementId: 'G-76X49RBE85',
});
// Necessary to receive background messages:
const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((m) => {
  console.log("onBackgroundMessage", m);
});
