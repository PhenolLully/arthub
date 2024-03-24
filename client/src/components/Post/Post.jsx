import React, { useState } from 'react';

export default function UploadImage() {
    const [title, setTitle] = useState('');
    const [images, setImages] = useState([]);
    const [description, setDescription] = useState('');

    function onImageChange(e) {
        setImages([...e.target.files]);
    }

    return (
        <>
            <h1 style = {{
                color: 'white',
            }}>Create a Post</h1>
            <div style = {{}}>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label htmlFor="image">Upload Image:</label>
                <input type="file" id="image" multiple accept="image/*" onChange={onImageChange} />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>
        </>
    );
}
