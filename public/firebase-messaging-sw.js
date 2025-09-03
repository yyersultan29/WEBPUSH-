// public/firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyC4koPzrqVmcEh7eUGqVEkKwpvxwzST4c4",
  authDomain: "web-push-notic.firebaseapp.com",
  projectId: "web-push-notic",
  storageBucket: "web-push-notic.firebasestorage.app",
  messagingSenderId: "1078909252371",
  appId: "1:1078909252371:web:465fa2719e87aa7d5ba0e6",
  measurementId: "G-MD3J6WFLF4"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Received background message: ", payload);
  const { title, body, icon } = payload.notification;
  self.registration.showNotification(title, {
    body,
    icon,
  });
});
