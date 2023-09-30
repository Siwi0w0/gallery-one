import { useState, useEffect } from 'react';
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from '../firebase/config';

export const useFirestore = (collectionName) => {
    let unsubscribe = () => {
        console.log('unsubscribe');
    };
    
    const [docs, setDocs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                const q = query(collection(db, collectionName), orderBy("createAt", "desc"));
                const unsubscribe = onSnapshot(q, (querySnapshot) => {
                const images = {
                    imageURL: '',
                    createAt: '',
                    userEmail: '',
                };
                querySnapshot.forEach((doc) => {
                    const imageURL = doc.data().imageURL;
                    const createAt = doc.data().createAt.toDate();
                    const userEmail = doc.data().userEmail;
                    images.push({imageURL, createAt, userEmail});

                });
                  setDocs(images);
                  setIsLoading(false);
                });

            } catch(error){
                console.log(error);
                setIsLoading(false);
            }
            
        }
        getData();

        //what does this line mean
        return () => unsubscribe && unsubscribe();
        
    }, [collectionName])

    return { docs, isLoading };
};
