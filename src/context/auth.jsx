import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";

export const AuthContext = createContext({
    user: null,
    isLoading: false,
    // login: () => {}
});

export function useAuth() {
    return useContext(AuthContext);
}

//create context provider
export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
            setIsLoading(false);
        });

        return unsubscribe;
    })

    const value = {
        user, 
        isLoading,
        login: (email, password) => {
            return auth.signInWithEmailAndPassword(email, password);
        },
        logout: () => {
            return auth.signOut();
        }
    };

    return (
        <AuthContext.Provider value={value}>
            {!isLoading && children}
        </AuthContext.Provider>
    )
}