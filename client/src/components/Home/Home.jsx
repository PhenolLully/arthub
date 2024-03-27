import React from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import './Home.css'; // Assuming you have a Home.css file 
import { useQuery } from '@apollo/client';
import { GET_PICTURES } from '../../utils/queries';

export default function Home() {

  const { data, loading } = useQuery(GET_PICTURES)

  const pictureData = data?.pictures || []
  
  // PostContainer component
  const PostContainer = ({ pic }) => (
    <div className='col-md-3 text-center mx-2' style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginBottom: '20px', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
      <div className='postContainer'>
      <img src={pic.imageUrl} alt="" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover', borderRadius: '5px' }} />
        <h2 style={{ fontSize: '18px', color: '#333', textDecoration: 'none', margin: '0', padding: '0' }}>
          <a href={`/singlepost/${pic._id}`} style={{ color: '#333', textDecoration: 'none' }}>{pic.title}</a>
        </h2>
        <p>{pic.username} on {pic.createdAt} </p>
      </div>
    </div>
  );
  
  // Updated return statement
  return (
    <div>
      <div className='content-wrapper'>
        <h1>ArtHub</h1>
        <h2 className="Feed">Your feed</h2>
        <div className='row '>
          {pictureData?.map((pic) => (
            <PostContainer pic={pic} key={pic._id} />
          ))}
        </div>
      </div>
    </div>
  );
}