import React from 'react';
import { useLocation } from 'react-router-dom';

function Profilee() {
  const location = useLocation(); // Hook to access the location object
  const queryParams = new URLSearchParams(location.search); // Get query params from the URL

  // Extract form data from query params
  const profileData = {
    name: queryParams.get('name'),
    designation: queryParams.get('designation'),
    phone: queryParams.get('phone'),
    email: queryParams.get('email'),
    company: queryParams.get('company'),
    address: queryParams.get('address'),
    website: queryParams.get('website'),
    socialMedia: {
      facebook: queryParams.get('socialMedia.facebook'),
      twitter: queryParams.get('socialMedia.twitter'),
      linkedin: queryParams.get('socialMedia.linkedin'),
      pinterest: queryParams.get('socialMedia.pinterest'),
    },
  };

  return (
    <div>
      <div className="card shadow-lg">
        <div className="card-header text-center text-white py-4" style={{ backgroundColor: '#004d40' }}>
          <div>
            <img
              src={profileData.profileImage || 'https://via.placeholder.com/100'}
              alt="Profile"
              className="rounded-circle mb-3"
              style={{ width: '100px', height: '100px', border: '3px solid white' }}
            />
            <h4 className="mb-1">{profileData.name}</h4>
            <h6>{profileData.designation}</h6>
            <a href={`/profile?name=${profileData.name}`} target="_blank" rel="noopener noreferrer">ProfileLink</a>
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
                <div>{profileData.phone}</div>
                <small className="text-muted">Mobile</small>
              </div>
            </li>
            <hr />
            <li className="d-flex align-items-center mb-3">
              <i className="bi bi-envelope me-3 fs-5"></i>
              <div>
                <div>{profileData.email}</div>
                <small className="text-muted">Email</small>
              </div>
            </li>
            <hr />
            <li className="d-flex align-items-center mb-3">
              <i className="bi bi-building me-3 fs-5"></i>
              <div>
                <div>{profileData.company}</div>
                <small className="text-muted">Company</small>
              </div>
            </li>
            <hr />
            <li className="d-flex align-items-start mb-3">
              <i className="bi bi-geo-alt me-3 fs-5"></i>
              <div>
                <div>{profileData.address}</div>
                <a href="#" className="text-primary d-block mt-1">Show on Map</a>
              </div>
            </li>
            <hr />
            <li className="d-flex align-items-center">
              <i className="bi bi-globe me-3 fs-5"></i>
              <a href={profileData.website} className="text-decoration-none">{profileData.website}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profilee;
