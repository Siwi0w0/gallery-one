import { useState } from 'react';
import { ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../firebase/config';
import { v4 as uuidv4 } from 'uuid';

const useStorage = () => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

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
        }, (error) => {
          setError(error);
        }, () => {
    
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setUrl(downloadURL);
            setProgress(progress);
          });
  });
};

    return(
        progress, error, startUpload
    )
};

export default useStorage;
