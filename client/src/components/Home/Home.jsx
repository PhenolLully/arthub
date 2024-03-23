import React from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

export default function Post() {
  return (
    <MDBBtn size='lg' floating style={{ backgroundColor: '#ac2bac', boxShadow: 'none', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', disableRipple: true }} href='#'>
      <MDBIcon fab icon='instagram' />
    </MDBBtn>
  );
}