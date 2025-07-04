// firebase.js ✅
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// ✅ If you want Analytics, you can add getAnalytics — but it only works in the browser!
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDW5ntQiR9cF-qZ9vOGY49P6hTOUhTPxdc",
  authDomain: "neurobet-ai.firebaseapp.com",
  databaseURL: "https://neurobet-ai-default-rtdb.firebaseio.com",
  projectId: "neurobet-ai",
  storageBucket: "neurobet-ai.appspot.com",
  messagingSenderId: "793175611155",
  appId: "1:793175611155:web:10d91cb8d4fca30f6eece6",
  measurementId: "G-RPZZ9MPQTJ"
};

// ✅ Prevent Firebase from initializing more than once (important for Next.js!)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getDatabase(app);

// ✅ Optional: Analytics only in browser
let analytics = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, auth, db, analytics };
