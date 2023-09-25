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
        if(!file) {return;}

        //create random id
        const fileId = uuidv4();
        const formatFile = file.type.split('/')[1];
        console.log(formatFile);
      
        const storageRef = ref(storage, `images/${fileId}.${formatFile}`);

        uploadTask = uploadBytesResumable(storageRef, file);
       

        uploadTask.on('state_changed', 
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          setProgress(progress);
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        }, 
        (error) => {
          setError(error);
        }, () => {
          // Handle successful uploads on complete
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
          });
  }
);
};

    return(
        progress, error, url, startUpload
    )
}

export default useStorage;
