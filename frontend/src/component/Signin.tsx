import { getAuth, sendSignInLinkToEmail, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { auth } from "../App";
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

export const Signin = () => {
    const [email,setEmail] = useState("")
    const actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be in the authorized domains list in the Firebase Console.
        url: 'http://localhost:5173',
        // This must be true.
        handleCodeInApp: true,
      };

  async function onSignin() {
    
    await signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      if(!credential) return;
      const token = credential.accessToken;
      const user = result.user;
      alert("signed in successfully")
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorCode, errorMessage)
      alert("not signed in")
      // ...
    });
  
  }
  return <>
    <button onClick={onSignin}>Login with Google</button>
  </>;
};
