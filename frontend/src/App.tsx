// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Signin } from "./component/Signin";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyANwrq0IJQTzP00jQmUGRmBE7nRkq73no8",
  authDomain: "leetcode-6c392.firebaseapp.com",
  projectId: "leetcode-6c392",
  storageBucket: "leetcode-6c392.appspot.com",
  messagingSenderId: "422229413993",
  appId: "1:422229413993:web:a0f1d2726b763d039a12f8",
  measurementId: "G-66GQ8DW7WE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


function App() {
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){

      }
      else{

      }
    })
  },[])
  return (
    <>
      <h1 className="text-2xl text-red-400">
        Hllo World
      </h1>
      <Signin/>
    </>
  )
}

export default App
