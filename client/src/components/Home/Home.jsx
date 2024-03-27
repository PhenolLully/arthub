import React from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import './Home.css'; // Assuming you have a Home.css file 
import { useQuery } from '@apollo/client';
import { GET_PICTURES } from '../../utils/queries';

export default function Home() {

  const { data, loading } = useQuery(GET_PICTURES)

  const pictureData = data?.pictures || []
  return (
    <div>

      <div>
        <h1 className="Feed">Your feed</h1>
        {/* Add your post information here */}
        <div className='row '>
          {pictureData?.map((pic) => (
            <div className='col-md-3 text-center border mx-2'>
              <img src={pic.imageUrl} alt="" width={300} />
              <h2><a href={`/singlepost/${pic._id}`}>{pic.title}</a></h2>

              <p>{pic.username} on {pic.createdAt} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}