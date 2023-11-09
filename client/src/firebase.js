import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAXF87vncgBO-bWpDcPd_t_QDjXxFuH_3M",
  authDomain: "grow-social-media-app-1.firebaseapp.com",
  projectId: "grow-social-media-app-1",
  storageBucket: "grow-social-media-app-1.appspot.com",
  messagingSenderId: "366114170611",
  appId: "1:366114170611:web:05e9b80f4d990d1f763986",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
