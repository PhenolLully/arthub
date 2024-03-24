import React from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import './Home.css'; // Assuming you have a Post.css file for styling

export default function Post() {
  return (
    <div className="post-btn-container">
      <MDBBtn
        size='lg'
        floating
        style={{ backgroundColor: '#ac2bac', boxShadow: 'none', borderRadius: '50%', width: '60px', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center', disableRipple: true }}
        href='#'
      >
        <MDBIcon fab icon='instagram' />
        <span className="plus-sign">+</span>
      </MDBBtn>
    </div>
  );
}