import React from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import './Home.css'; // Assuming you have a Home.css file for styling
import {Link} from 'react-router-dom';

export default function Post() {
  return (
    <div>
    <div className="post-btn-container">
      <MDBBtn
        size='lg'
        floating
        style={{ backgroundColor: '#ac2bac', boxShadow: 'none', borderRadius: '50%', width: '60px', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center', disableRipple: true }}
        href='#'
      >
        <MDBIcon fab icon='instagram' />

        <Link to="/post">
            <span className="plus-sign">+</span>
        </Link>

      </MDBBtn>
    </div>
    <div>
      <h1 className="Feed">Your feed</h1>
      {/* Add your post information here */}
    </div>
    </div>
  );
}