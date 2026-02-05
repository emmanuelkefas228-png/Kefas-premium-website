import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";

export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
};

export const app = initializeApp(firebaseConfig);