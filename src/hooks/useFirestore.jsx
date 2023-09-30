import { useState, useEffect } from 'react';
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from '../firebase/config';

export const useFirestore = (collectionName) => {
    const [docs, setDocs] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                const q = query(collection(db, collectionName), orderBy("createAt", "desc"));
                const unsubscribe = onSnapshot(q, (querySnapshot) => {
                const images = [];
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
    }, [collectionName])

    return { docs, isLoading };
};
