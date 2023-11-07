import { initializeApp } from "firebase/app";

import {getStorage} from 'firebase/storage'
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAkbRDhBVMfmMsUPcW_6Of0gjrbZJ3YwQU",
  authDomain: "sit-313-task-9-1c.firebaseapp.com",
  projectId: "sit-313-task-9-1c",
  storageBucket: "sit-313-task-9-1c.appspot.com",
  messagingSenderId: "491960324321",
  appId: "1:491960324321:web:19aed4eedd6aab2e0227a0",
  measurementId: "G-XTF9QSJL7Y"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const imageDb=getStorage(app)
export const firestoreDb = getFirestore(app);