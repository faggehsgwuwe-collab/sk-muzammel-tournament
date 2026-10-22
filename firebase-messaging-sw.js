importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDPSuqZnMDrFhGHDYPahfcR7APjjkFbwlo",
  authDomain: "notification-c30ee.firebaseapp.com",
  databaseURL: "https://notification-c30ee-default-rtdb.firebaseio.com",
  projectId: "notification-c30ee",
  storageBucket: "notification-c30ee.firebasestorage.app",
  messagingSenderId: "524190653958",
  appId: "1:524190653958:web:0f39f0e3c8a2c33937ed87"
});

const messaging = firebase.messaging();

// অ্যাপ বন্ধ/ব্যাকগ্রাউন্ডে থাকলে নোটিফিকেশন দেখাবে (FCM নিজেই দেখায়)
messaging.onBackgroundMessage((payload) => {
  console.log("Background message:", payload);
});
