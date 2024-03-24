import React, { useState } from 'react';

export default function UploadImage() {
    const [title, setTitle] = useState('');
    const [images, setImages] = useState([]);
    const [description, setDescription] = useState('');
    const [imagePreview, setImagePreview] = useState('');

    function onImageChange(e) {
        const chosenImage = e.target.files[0];
        setImages([chosenImage]);
        if (chosenImage) {
            const reader = new FileReader();
            reader.onload = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(chosenImage);
        } else {
            setImagePreview('');
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1 style={{ color: "white", fontSize: '5em', marginBottom: '20px' }}>Create a Post</h1>
            <div style={{ marginBottom: '20px' }}>
                <label htmlFor="title" style={{ fontSize: '2.5em', marginRight: '10px' }}>Title:</label>
                <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} style={{ fontSize: '1.2em', padding: '5px' }} />
            </div>
            <div style={{ marginBottom: '20px' }}>
                <label htmlFor="image" style={{ fontSize: '2em', marginRight: '10px' }}>Upload Image:</label>
                <input type="file" id="image" accept="image/*" onChange={onImageChange} style={{ fontSize: '1.2em', padding: '5px' }} />
            </div>
            {imagePreview && (
                <div style={{ marginBottom: '20px' }}>
                    <img src={imagePreview} alt="Preview" style={{ maxWidth: '100%', maxHeight: '300px' }} />
                </div>
            )}
            <div style={{ marginBottom: '20px' }}>
                <label htmlFor="description" style={{ fontSize: '2em', marginRight: '10px' }}>Description:</label>
                <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} style={{ fontSize: '1.2em', padding: '5px', minHeight: '100px', minWidth: '300px' }}></textarea>
            </div>
        </div>
    );
}
