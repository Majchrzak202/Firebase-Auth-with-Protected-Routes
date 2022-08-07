import { initializeApp } from "firebase/app";
import {getAuth} from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfO-GtAPd5ZZn0xLiAWHtaPZQEou-UHTk",
  authDomain: "fir-auth-router-project.firebaseapp.com",
  projectId: "fir-auth-router-project",
  storageBucket: "fir-auth-router-project.appspot.com",
  messagingSenderId: "831570039857",
  appId: "1:831570039857:web:83beb8ed2f077d1676b110",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

