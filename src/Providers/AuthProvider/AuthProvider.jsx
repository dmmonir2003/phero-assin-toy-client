import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithCredential, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../Firebase/firebase.config";



export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null);

    const [loading, setloading] = useState(false);
    const googleprovider = new GoogleAuthProvider();





    const createUser = (email, password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setloading(true);
        return signInWithPopup(auth, googleprovider);
    }

    const signIn = (email, password) => {
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setloading(true);
        return signOut(auth);
    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("Current User:", currentUser); // Add this line for debugging
            setUser(currentUser);
            updateProfileUser(currentUser);
            setloading(false);
        });
        return () => unSubscribe();
    }, []);


    const updateProfileUser = (user, name, photoURL) => {
        if (user) {

            updateProfile(user, {
                displayName: name,

                photoURL: photoURL
            })
                .then(() => {

                    setTimeout(() => {

                        const updatedUser = auth.currentUser;
                        if (updatedUser) {
                            console.log('User profile updated successfully.');
                            console.log('Updated displayName:', updatedUser.displayName);
                            console.log('Updated photoURL:', updatedUser.photoURL);
                        } else {
                            console.error('User is not available. Make sure the user is logged in.');
                        }
                    }, 2000);
                })
                .catch((error) => {

                });
        } else {

            console.error('User is not available. Make sure the user is logged in.');
        }
    };







    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleSignIn,
        updateProfileUser
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;