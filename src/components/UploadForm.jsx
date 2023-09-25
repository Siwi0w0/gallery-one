import React from 'react';
import { useState } from 'react';
import useStorage from '../hooks/useStorage';

const  UploadForm = () => {
    const[selectedFile, setSelectedFile] = useState();
    const { startUpload } = useStorage();

    const handleFileChange = (e) => {
        if(e.target.files && e.target.files[0]){
            setSelectedFile(e.target.files[0]);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(selectedFile) {
            startUpload(selectedFile);
        }
        setSelectedFile(null);
    }

    return (
        <div className="text-center mt-10">
            <form onSubmit={handleSubmit}className="flex items-center flex-col gap-8">
                <input
                 type="file" 
                 name="file"
                 onChange={handleFileChange}
                 className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
                <button 
                type="submit" className="btn gap-3">Upload</button>
            </form>
        </div>
    )
}

export default UploadForm;