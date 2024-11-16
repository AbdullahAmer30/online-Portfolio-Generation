import React from 'react';
import { useLocation } from 'react-router-dom';

const Profile = () => {
  const location = useLocation();

  const getQueryParams = () => {
    const params = new URLSearchParams(location.search);
    const socialMedia = {
      facebook: params.get('socialMedia.facebook'),
      twitter: params.get('socialMedia.twitter'),
      linkedin: params.get('socialMedia.linkedin'),
      pinterest: params.get('socialMedia.pinterest'),
    };
    return {
      name: params.get('name'),
      designation: params.get('designation'),
      phone: params.get('phone'),
      email: params.get('email'),
      company: params.get('company'),
      address: params.get('address'),
      website: params.get('website'),
      socialMedia,
    };
  };

  const data = getQueryParams();

  return (
    <div style={{ backgroundColor: "#f8f9fa", padding: "20px" }}>
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="card shadow-lg" style={{ width: "100%", maxWidth: "500px" }}>
        <div className="card-header text-center text-white py-4" style={{ backgroundColor: "#004d40" }}>
          <div>
            <img
              src={data.profileImage || "https://via.placeholder.com/100"}
              alt="Profile"
              className="rounded-circle mb-3"
              style={{
                width: "100px",
                height: "100px",
                border: "3px solid white",
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
                <div>{data.phone}</div>
                <small className="text-muted">Mobile</small>
              </div>
            </li>
            <hr />
            <li className="d-flex align-items-center mb-3">
              <i className="bi bi-envelope me-3 fs-5"></i>
              <div>
                <div>{data.email}</div>
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
                <a href="#" className="text-primary d-block mt-1">
                  Show on Map
                </a>
              </div>
            </li>
            <hr />
            <li className="d-flex align-items-center">
              <i className="bi bi-globe me-3 fs-5"></i>
              <a href={data.website} className="text-decoration-none">
                {data.website}
              </a>
            </li>
          </ul>
          <hr />
          <div className="d-flex justify-content-center gap-3">
            {data.socialMedia.facebook && (
              <a href={`https://${data.socialMedia.facebook}`} target="_blank" rel="noopener noreferrer" className="text-primary fs-5">
                <i className="bi bi-facebook"></i>
              </a>
            )}
            {data.socialMedia.twitter && (
              <a href={`https://${data.socialMedia.twitter}`} target="_blank" rel="noopener noreferrer" className="text-primary fs-5">
                <i className="bi bi-twitter"></i>
              </a>
            )}
            {data.socialMedia.linkedin && (
              <a href={`https://${data.socialMedia.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-primary fs-5">
                <i className="bi bi-linkedin"></i>
              </a>
            )}
            {data.socialMedia.pinterest && (
              <a href={`https://${data.socialMedia.pinterest}`} target="_blank" rel="noopener noreferrer" className="text-danger fs-5">
                <i className="bi bi-pinterest"></i>
              </a>
            )}
          </div>
          <div className="text-center">
            <button className="btn btn-danger w-100 mb-3" style={{ fontWeight: "bold" }}>
              <i className="bi bi-download me-2"></i> Download vCard
            </button>
            <button className="btn btn-outline-secondary w-100" style={{ fontWeight: "bold" }}>
              <i className="bi bi-share me-2"></i> Share This Page
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Profile;
