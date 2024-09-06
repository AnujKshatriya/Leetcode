import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import { useState } from "react";

export const Signin = () => {
    const [email,setEmail] = useState("")
    const actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be in the authorized domains list in the Firebase Console.
        url: 'https://localhost:3000',
        // This must be true.
        handleCodeInApp: true,
      };

  async function onSignin() {
    const auth = getAuth();
    await sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        window.localStorage.setItem("emailForSignIn", email);
        alert("sent email")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("email not sent")
        console.log(errorCode, errorMessage)
      });
  }
  return <>
    <input onChange={(e)=>setEmail(e.target.value)} type="text" />
    <button onClick={onSignin}>SignIn</button>
  </>;
};
