// SOME OF THIS IS A TEMPLATE AND WILL BE UPDATED. I have added my own code as well!
import React, { useState } from 'react';
import './Profile.css';



import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [birthday, setBirthday] = useState("");
  const [favoriteMovies, setFavoriteMovies] = useState("");
  const [favoriteMusic, setFavoriteMusic] = useState("");
  const [hobbies, setHobbies] = useState("");
  return (
    <section>
      <MDBContainer className="py-5">
        {/* <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <a href='#'>Home</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <a href="#">User</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow> */}

        <MDBRow>
          <MDBCol lg="12">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-1">{name}</p>
                <p className="text-muted mb-4">{country}</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn style={{ backgroundColor: '#ac2bac', boxShadow: 'none', width: '100px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', disableRipple: true }}>Follow</MDBBtn>
                  <MDBBtn style={{ backgroundColor: '#fafafa', boxShadow: 'none', width: '100px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', disableRipple: true }} outline className="ms-1">Message</MDBBtn>
                </div>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  setIsEditing(!isEditing);
                }}>
                  <div>
                    <MDBBtn outline className="ms-1" type="submit" style={{ backgroundColor: '#fafafa', boxShadow: 'none', width: '100px', height: '50px', justifyContent: 'center', alignItems: 'center', textAlign: 'center', disableRipple: true }}>{isEditing ? "Update" : "Edit"} Profile</MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>


          </MDBCol>
          <MDBCol lg="5">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  setIsEditing(!isEditing);
                }}>
                  <MDBRow>
                    <MDBCol sm="5">
                      <MDBCardText>Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="7">
                      <MDBCardText className="text-muted">{""}
                        {isEditing ? (
                          <input
                            value={name}
                            onChange={(e) => {
                              setName(e.target.value);
                            }} />
                        ) : (
                          <b>{name}</b>
                        )}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="5">
                      <MDBCardText>Country</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="7">
                      <MDBCardText className="text-muted">{""}
                        {isEditing ? (
                          <input
                            value={country}
                            onChange={(e) => {
                              setCountry(e.target.value);
                            }} />
                        ) : (
                          <b>{country}</b>
                        )}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="5">
                      <MDBCardText>Birthday</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="7">
                      <MDBCardText className="text-muted">{""}
                        {isEditing ? (
                          <input
                            value={birthday}
                            onChange={(e) => {
                              setBirthday(e.target.value);
                            }} />
                        ) : (
                          <b>{birthday}</b>
                        )}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="5">
                      <MDBCardText>Favorite Movies</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="7">
                      <MDBCardText className="text-muted">{""}
                        {isEditing ? (
                          <textarea
                            value={favoriteMovies}
                            onChange={(e) => {
                              setFavoriteMovies(e.target.value);
                            }} />
                        ) : (
                          <b>{favoriteMovies}</b>
                        )}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="5">
                      <MDBCardText>Favorite Music</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="7">
                      <MDBCardText className="text-muted">{""}
                        {isEditing ? (
                          <textarea
                            value={favoriteMusic}
                            onChange={(e) => {
                              setFavoriteMusic(e.target.value);
                            }} />
                        ) : (
                          <b>{favoriteMusic}</b>
                        )}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="5">
                      <MDBCardText>Hobbies</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="7">
                      <MDBCardText className="text-muted">{""}
                        {isEditing ? (
                          <textarea
                            value={hobbies}
                            onChange={(e) => {
                              setHobbies(e.target.value);
                            }} />
                        ) : (
                          <b>{hobbies}</b>
                        )}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="7">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <MDBCardText style={{ color: '#111111' }} className="lead fw-normal mb-0">Recent Art</MDBCardText>
              <MDBCardText className="mb-0"><a href="#!" className="text-muted">Show all</a></MDBCardText>
            </div>
            <MDBRow>
              <MDBCol className="mb-2">
                <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                  alt="image 1" className="w-100 rounded-3" />
              </MDBCol>
              <MDBCol className="mb-2">
                <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                  alt="image 1" className="w-100 rounded-3" />
              </MDBCol>
              <MDBCol className="mb-2">
                <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                  alt="image 1" className="w-100 rounded-3" />
              </MDBCol>
            </MDBRow>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <MDBCardText style={{ color: '#111111' }} className="lead fw-normal mb-0 ">Recent Favorites</MDBCardText>
              <MDBCardText className="mb-0"><a href="#!" className="text-muted">Show all</a></MDBCardText>
            </div>
            <MDBRow>
              <MDBCol className="mb-2">
                <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                  alt="image 1" className="w-100 rounded-3" />
              </MDBCol>
              <MDBCol className="mb-2">
                <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                  alt="image 1" className="w-100 rounded-3" />
              </MDBCol>
              <MDBCol className="mb-2">
                <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                  alt="image 1" className="w-100 rounded-3" />
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}