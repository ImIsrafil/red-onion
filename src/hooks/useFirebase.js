import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  initializeAuthentication();
  const auth = getAuth();

  const signInUsingGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
    setIsLoading(true);
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    setIsLoading(false);
    return () => unsubscribed;

  }, [])

  const logOut = () => {
    setIsLoading(true)
    signOut(auth)
      .then(() => {})
      .catch((err) => {
        setError(err);
      }).finally(() => {
        setIsLoading(false);
      })

  };

  return {
    user,
    error,
    signInUsingGoogle,
    logOut,
    isLoading,
    setIsLoading
  };
};

export default useFirebase;
