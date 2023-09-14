import React from "react";

const ImageGallery = () => {
    return (
        <div className="grid md:grid-cols-3 justify-center gap-10">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="" alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title"></h2>
                    <p>Upload by: </p>
                    <span>Created on</span>
                    <div className="card-actions justify-end">
                    </div>
                </div>
             </div>
        </div>
    )
}

export default ImageGallery;