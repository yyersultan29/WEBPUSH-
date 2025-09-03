// src/firebase.js
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { VAPID_KEY } from "./const";

// Import the functions you need from the SDKs you need

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4koPzrqVmcEh7eUGqVEkKwpvxwzST4c4",
  authDomain: "web-push-notic.firebaseapp.com",
  projectId: "web-push-notic",
  storageBucket: "web-push-notic.firebasestorage.app",
  messagingSenderId: "1078909252371",
  appId: "1:1078909252371:web:465fa2719e87aa7d5ba0e6",
  measurementId: "G-MD3J6WFLF4"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

// Запрос разрешения и получение токена
export const requestPermission = async () => {
  console.log("Requesting permission...");
  const permission = await Notification.requestPermission();
  if (permission === "granted") {
    console.log("Notification permission granted.");
    try {
      const token = await getToken(messaging, {
        vapidKey: VAPID_KEY,
      });
      console.log("FCM Token:", token);
      return token;
    } catch (error) {
      console.error("Error getting FCM token:", error);
    }
  } else {
    console.warn("Notification permission denied.");
  }
};

// Слушатель входящих сообщений, когда вкладка активна
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log(payload)
      resolve(payload);
    });
  });
