// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {Signin, Topbar} from "./component/index"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { RecoilRoot, useRecoilState } from "recoil";
import { userAtom } from "./store/atoms/user";

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

function StoreApp() {
  const [user,setUser] = useRecoilState(userAtom)
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user && user.email){
        setUser({
          loading:false,
          user:{
            email: user.email
          }
        })
      }
      else{
        setUser({
          loading:false,
        })
      }
    })
  },[])

  if(user.loading){
    return <div>Loading....</div>
  }

  if(!user.user){
    return <div><Signin/></div>
  }

  return (
    <div className="w-full flex items-center justify-center">
      <Topbar/>
    </div>
  )
} 

function App() {
  return <RecoilRoot>
    <StoreApp/>
  </RecoilRoot>
}

export default App
