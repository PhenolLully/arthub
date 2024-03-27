import React, { useState, useEffect } from 'react';
import { ADD_PICTURE } from '../../utils/mutations';
import { useMutation } from '@apollo/client';


let myWidget = null;

export default function UploadImage({ user }) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imagePreview, setImagePreview] = useState('');

    const [addPicture, { loading }] = useMutation(ADD_PICTURE);

    useEffect(() => {
        var myWidget = window.cloudinary.createUploadWidget(
            {
                cloudName: "dyjuhnsa0",
                uploadPreset: "ml_default"
            },
            (error, result) => {
                if (!error && result && result.event === "success") {
                    console.log("Done! Here is the image info: ", result.info.url);
                    setImagePreview(result.info.url)
                }
            }
        );
        document.getElementById("upload_widget").addEventListener(
            "click",
            function () {
                myWidget.open();
            },
            false
        );
    }, []);




    async function submitPost() {
      

        try {
            // Execute the addPicture mutation

            console.log(title, description, imagePreview);
            const { data } = await addPicture({
                variables: {
                    title,
                    description,
                    imageUrl: imagePreview, // this should be the URL of the uploaded image
                },
            });
            console.log('Post added:', data); // Handle success response as needed
            window.location.replace('/')
        } catch (error) {
            console.error('Error adding post:', error); // Handle error
        }
    }


    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1 style={{ color: "white", fontSize: '5em', marginBottom: '20px' }}>Create a Post</h1>
            <div style={{ marginBottom: '20px' }}>
                <label 
                htmlFor="title" 
                style={{ fontSize: '2.5em', marginRight: '10px' 
                }}
                >Title:</label>
                <input 
                type="text" 
                id="title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                style={{ fontSize: '1.2em', padding: '5px' }} 
                />
            </div>
            {/* <div style={{ marginBottom: '20px' }}>
                <label 
                htmlFor="image" 
                style={{ fontSize: '2em', marginRight: '10px', }}
                >Upload Image:</label>
                <input 
                type="file" 
                id="image" 
                accept="image/*" 
                onChange={onImageChange} 
                style={{ fontSize: '1.2em', padding: '5px' }} 
                />
            </div> */}
            {imagePreview && (
                <div style={{ marginBottom: '20px' }}>
                    <img src={imagePreview} alt="Preview" style={{ maxWidth: '100%', maxHeight: '300px' }} />
                </div>
            )}
            <div style={{ marginBottom: '20px' }}>
                <label 
                htmlFor="description" 
                style={{ fontSize: '2em', marginRight: '10px' }}
                >Description:</label>
                <textarea 
                id="description" 
                value={description}
                 onChange={(e) => setDescription(e.target.value)} 
                 style={{ fontSize: '1.2em', padding: '5px', minHeight: '100px', minWidth: '300px' }}
                 ></textarea>
            </div>
            <div>
                <button id="upload_widget" className="cloudinary-button">
                    Upload
                </button>
                <button id="submit_post" className="submit-button" onClick={submitPost}>
                    Submit Post
                </button>
            </div>
            {imagePreview && <img src={imagePreview} alt="Uploaded" />}
        </div>
    );
}
