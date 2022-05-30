import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth';
import { useState } from 'react';
import initializeAuthentication from "../Firebase/Firebase.init"



const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState({})

  initializeAuthentication();
  const auth = getAuth();
  
  const signInUsingGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
      signInWithPopup(auth, googleProvider)
      .then(result => {
          setUser(result.user);
      })
      .catch(err => setError(err));
  }

  onAuthStateChanged(auth, (user) => {
      if(user) {
          setUser(user)
      } else {
          setUser({});
      }
  })

  const logOut = () => {
      signOut(auth)
      .then(() => {

      }).catch((err) => {
          setError(err);
      })
  }


  return {
      user,
      error,
      signInUsingGoogle,
      logOut
  }

}

export default useFirebase     
