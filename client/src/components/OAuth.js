import React from "react";
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'
import { app } from "../firebase";

export default function OAuth() {
  const handleGoogleClick = async () => {
    try {
        const provider = new GoogleAuthProvider();
        const auth = getAuth(app)

        const result = await signInWithPopup(auth, provider)
        console.log(result)
    } catch (error) {
      console.log("Could not sign in with google", error);
    }
  };

  return (
    <button
      type="button"
      className="bg-green-700 text-white p-3 rounded-md uppercase hover:opacity-90"
      onClick={handleGoogleClick}
    >
      Continue with Google
    </button>
  );
}
 