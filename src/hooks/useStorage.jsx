import { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from "firebase/firestore"; 
import { storage, db } from '../firebase/config';
import { v4 as uuidv4 } from 'uuid';
import { useAuth } from './useAuth';

const useStorage = () => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
    const { user } = useAuth();
    console.log(user);

   const startUpload = (file) => {
    //upload file to storage
      if(!file) {
        return;
      };

    //create random id
    const fileId = uuidv4();
    const formatFile = file.type.split('/')[1];

    const storageRef = ref(storage, `images/${fileId}.${formatFile}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    
    uploadTask.on('state_changed', 
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      setProgress(progress);
    }, (error) => {
      setError(error);
    }, async () => {

      const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
      setUrl(downloadURL);
      setProgress(progress);

      //store data in firestore
      await addDoc(collection(db, "images"), {
          imageURL: downloadURL,
          createAt: new Date(),
          userEmail: user?.email
        });
        
    });
  };

  return { progress, error, startUpload };
};

export default useStorage;
