import React from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

export default function Post() {
  return (
    <MDBBtn size='lg' floating style={{ backgroundColor: '#ac2bac' }} href='#'>
      <MDBIcon fab icon='instagram' />
    </MDBBtn>
  );
}