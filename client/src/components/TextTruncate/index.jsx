import React from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <>
      <MDBRow>
        <MDBCol size="2" className="text-truncate">
          Praeterea iter est quasdam res quas ex communi.
        </MDBCol>
      </MDBRow>

      <span className="d-inline-block text-truncate" style={{maxWidth: 150}}>
        Praeterea iter est quasdam res quas ex communi.
      </span>
    </>
  );
}