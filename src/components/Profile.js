import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
// import './Profile.css'
 
const Profile = () => {
  const location = useLocation();
  const [modalVisible, setModalVisible] = useState(false);
  const [vCardModalVisible, setVCardModalVisible] = useState(false);
  const [email, setEmail] = useState('');  // State for the email input
  const [emailError, setEmailError] = useState('');  // State for email validation error
 
  const getQueryParams = () => {
    const params = new URLSearchParams(location.search);
    return {
      name: params.get('name'),
      designation: params.get('designation'),
      phone: params.get('phone'),
      email: params.get('email'),
      company: params.get('company'),
      address: params.get('address'),
      website: params.get('website'),
      socialMedia: {
        facebook: params.get('facebook'),
        twitter: params.get('twitter'),
        linkedin: params.get('linkedin'),
        pinterest: params.get('pinterest'),
        instagram: params.get('instagram'),
      },
      profileImage: params.get('profileImage'),  // Adding profile image to the data
    };
  };
 
  const data = getQueryParams();
  const profileUrl = `${window.location.origin}/profile?${new URLSearchParams(location.search).toString()}`;
 
  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  const openVCardModal = () => setVCardModalVisible(true);
  const closeVCardModal = () => setVCardModalVisible(false);
 
  const copyLink = () => {
    navigator.clipboard.writeText(profileUrl);
    alert('Link copied to clipboard!');
  };
 
  // Function to generate vCard data
//   const generateVCard = () => {
//     const vCardData = `
 
// FN:${data.name}
// TEL:${data.phone}
// EMAIL:${data.email}
// ORG:${data.company}
// ADR:${data.address}
// URL:${data.website}
 
//     `;
//     return vCardData;
//   };
 
const generateVCard = () => {
    const vCardData = `
  BEGIN:VCARD
  VERSION:3.0
  FN:${data.name}
  TITLE:${data.designation}
  EMAIL:${data.email}
  TEL:${data.phone}
  ADR;TYPE=HOME:;;${data.address};;;;
  URL:${data.website}
  PHOTO;VALUE=URI:${data.profileImage || 'https://via.placeholder.com/100'}
  END:VCARD
    `;
    return vCardData;
  };
 
 
  // Function to download vCard file
//   const downloadVCard = () => {
//     const vCardData = generateVCard();
//     const blob = new Blob([vCardData], { type: 'text/vcard' });
//     const link = document.createElement('a');
//     link.href = URL.createObjectURL(blob);
//     link.download = `${data.name}.vcf`;
//     link.click();
//   };
 
 
  const downloadVCard = () => {
    const vCardData = generateVCard();
    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${data.name}.vcf`; // Ensure it ends with .vcf
    link.click();
  };
 
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(''); // Clear any previous error on new input
  };
 
  // Function to send vCard by email
  const sendVCardByEmail = () => {
    // Validate email
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
 
    setEmailError('');
 
    const vCardData = generateVCard();
    const mailtoLink = `mailto:${email}?subject=Contact vCard&body=${encodeURIComponent(vCardData)}`;
    window.location.href = mailtoLink; // Opens the email client with the vCard data in the body
  };
  // Placeholder function for "Add to Contacts" (this would likely require a native app or browser integration)
  const addToContacts = () => {
    alert('Add to Contacts functionality is not implemented in this demo.');
    downloadVCard();
  };
 
  return (
    <div style={{ backgroundColor: '#f8f9fa', padding: '20px' }}>
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="card shadow-lg" style={{ width: '100%', maxWidth: '500px' }}>
          <div className="card-header text-center text-white py-4" style={{ backgroundColor: '#004d40' }}>
            <div>
              <img
                src={data.profileImage || 'https://via.placeholder.com/100'}
                alt="Profile"
                className="rounded-circle mb-3"
                style={{
                  width: '100px',
                  height: '100px',
                  border: '3px solid white',
                }}
              />
              <h4 className="mb-1">{data.name}</h4>
              <h6>{data.designation}</h6>
            </div>
          </div>
          <div className="card-body bg-success text-white py-3">
            <div className="row">
              <div className="col text-center">
                <i className="bi bi-telephone fs-4"></i>
                <p className="mb-0 small">Call</p>
              </div>
              <div className="col text-center">
                <i className="bi bi-envelope fs-4"></i>
                <p className="mb-0 small">Email</p>
              </div>
              <div className="col text-center">
                <i className="bi bi-geo-alt fs-4"></i>
                <p className="mb-0 small">Directions</p>
              </div>
            </div>
          </div>
          <div className="card-body px-4">
            <ul className="list-unstyled">
              <li className="d-flex align-items-center mb-3">
                <i className="bi bi-phone me-3 fs-5"></i>
                <div>
  <a href={`tel:${data.phone}`} style={{ textDecoration: 'none', color: 'inherit' }}>
    <div>{data.phone}</div>
  </a>
  <small className="text-muted">Mobile</small>
</div>
 
              </li>
              <hr />
              <li className="d-flex align-items-center mb-3">
                <i className="bi bi-envelope me-3 fs-5"></i>
                <div>
  <a href={`mailto:${data.email}`} style={{ textDecoration: 'none', color: 'inherit' }}>
    <div>{data.email}</div>
  </a>
  <small className="text-muted">Email</small>
</div>
 
              </li>
              <hr />
              <li className="d-flex align-items-center mb-3">
                <i className="bi bi-building me-3 fs-5"></i>
                <div>
                  <div>{data.company}</div>
                  <small className="text-muted">Company</small>
                </div>
              </li>
              <hr />
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-geo-alt me-3 fs-5"></i>
                <div>
  <div>{data.address}</div>
  <a
    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(data.address)}`}
    className="text-primary d-block mt-1"
    target="_blank"
    rel="noopener noreferrer"
  >
    Show on Map
  </a>
</div>
 
              </li>
              <hr />
              <li className="d-flex align-items-center">
                <i className="bi bi-globe me-3 fs-5"></i>
                <a href={data.website} className="text-decoration-none" target="_blank" rel="noopener noreferrer">
                  {data.website}
                </a>
              </li>
            </ul>
            <hr />
            <div className="d-flex justify-content-center gap-3">
              {data.socialMedia.facebook && (
                <a
                  href={`https://${data.socialMedia.facebook}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary fs-5"
                >
                  <i className="bi bi-facebook"></i>
                </a>
              )}
              {data.socialMedia.instagram && (
                <a
                  href={`https://${data.socialMedia.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-danger fs-5"
                >
                  <i className="bi bi-instagram"></i>
                </a>
              )}
              {data.socialMedia.linkedin && (
                <a
                  href={`https://${data.socialMedia.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary fs-5"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              )}
              {data.socialMedia.pinterest && (
                <a
                  href={data.socialMedia.pinterest}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-danger fs-5"
                >
                  <i className="bi bi-pinterest"></i>
                </a>
              )}
            </div>
            <div className="text-center floating-buttons">
              <button className="btn btn-danger w-100 mb-3 vcard-btn" style={{ fontWeight: 'bold' }} onClick={openVCardModal}>
                <i className="bi bi-download me-2"></i> Download vCard
              </button>
              <button
                className="btn btn-outline-secondary w-100"
                style={{ fontWeight: 'bold' }}
                onClick={openModal}
              >
                <i className="bi bi-share me-2 share-btn"></i> Share This Page
              </button>
            </div>
            {/* <div className="floating-buttons">
  <button className="vcard-btn" onClick={openVCardModal}>
    <i className="bi bi-download"></i>
  </button>
  <button className="share-btn" onClick={openModal}>
    <i className="bi bi-share"></i>
  </button>
</div> */}
 
          </div>
        </div>
      </div>
 
      {/* Share Modal */}
      {modalVisible && (
        <div className="modal show" tabIndex="-1" style={{ display: 'block' }} onClick={closeModal}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Share This Page</h5>
                <button type="button" className="btn-close" onClick={closeModal}></button>
              </div>
              <div className="modal-body">
                <div className="d-flex justify-content-around">
                <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(profileUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary fs-4"
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(profileUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-success fs-4"
                  >
                    <i className="bi bi-whatsapp"></i>
                  </a>
                  <a
                    href={`mailto:?subject=Check this out&body=${encodeURIComponent(profileUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-danger fs-4"
                  >
                    <i className="bi bi-envelope"></i>
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(profileUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-info fs-4"
                  >
                    <i className="bi bi-twitter"></i>
                  </a>
                  <button onClick={copyLink} className="btn btn-light fs-4">
                    <i className="bi bi-link-45deg"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
 
      {/* vCard Modal */}
      {vCardModalVisible && (
 
        <div className="modal show" tabIndex="-1" style={{ display: 'block' }} aria-labelledby="vCardModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="vCardModalLabel">Send vCard via Email</h5>
                <button type="button" className="btn-close" onClick={closeVCardModal} aria-label="Close"></button>
              </div>
              <div className="mb-3">
                  <button className="btn btn-info w-100" onClick={addToContacts}>
                    <i className="bi bi-person-add me-2"></i> Add to Contacts
                  </button>
                </div>
              <div className="modal-body">
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email address"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  {emailError && <small className="text-danger">{emailError}</small>}
                </div>
                <div className="d-grid gap-2">
                  <button className="btn btn-primary" onClick={sendVCardByEmail}>
                    Send vCard
                  </button>
                </div>
 
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
 
export default Profile;