import React, { useState } from 'react';
import FormComponent from './components/FormComponent';

function TemplateComponent() {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
    const profileUrl = generateSharableLink(data);
    openTemplateInNewTab(data, profileUrl); // Open template in a new tab with the sharable link
  };

  const generateSharableLink = (data) => {
    const baseUrl = window.location.origin; // Base URL of the application
    const queryParams = new URLSearchParams(data).toString(); // Serialize data to query params
    return `${baseUrl}/profile?${queryParams}`;
  };

  const openTemplateInNewTab = (data,profileUrl) => {
    const newWindow = window.open('', '_blank'); // Open a new tab
    if (newWindow) {
      newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${data.name}'s Profile</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
          <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
          <style>
            body {
              background-color: #f8f9fa;
              margin: 0;
              padding: 20px;
              font-family: Arial, sans-serif;
            }
            .container {
              display: flex;
              justify-content: center;
              align-items: center;
              min-height: 100vh;
            }
            .card {
              width: 100%;
              max-width: 500px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="card shadow-lg">
              <div class="card-header text-center text-white py-4" style="background-color: #004d40;">
                <div>
                  <img src="${data.profileImage || 'https://via.placeholder.com/100'}" alt="Profile" class="rounded-circle mb-3" style="width: 100px; height: 100px; border: 3px solid white;">
                  <h4 class="mb-1">${data.name}</h4>
                  <h6>${data.designation}</h6>
                  <a href="${profileUrl}" target="_blank">ProfileLink</a>
                </div>
              </div>
              <div class="card-body bg-success text-white py-3">
                <div class="row">
                  <div class="col text-center">
                    <i class="bi bi-telephone fs-4"></i>
                    <p class="mb-0 small">Call</p>
                  </div>
                  <div class="col text-center">
                    <i class="bi bi-envelope fs-4"></i>
                    <p class="mb-0 small">Email</p>
                  </div>
                  <div class="col text-center">
                    <i class="bi bi-geo-alt fs-4"></i>
                    <p class="mb-0 small">Directions</p>
                  </div>
                </div>
              </div>
              <div class="card-body px-4">
                <ul class="list-unstyled">
                  <li class="d-flex align-items-center mb-3">
                    <i class="bi bi-phone me-3 fs-5"></i>
                    <div>
                      <div>${data.phone}</div>
                      <small class="text-muted">Mobile</small>
                    </div>
                  </li>
                  <hr/>
                  <li class="d-flex align-items-center mb-3">
                    <i class="bi bi-envelope me-3 fs-5"></i>
                    <div>
                      <div>${data.email}</div>
                      <small class="text-muted">Email</small>
                    </div>
                  </li>
                  <hr/>
                  <li class="d-flex align-items-center mb-3">
                    <i class="bi bi-building me-3 fs-5"></i>
                    <div>
                      <div>${data.company}</div>
                      <small class="text-muted">Company</small>
                    </div>
                  </li>
                  <hr/>
                  <li class="d-flex align-items-start mb-3">
                    <i class="bi bi-geo-alt me-3 fs-5"></i>
                    <div>
                      <div>${data.address}</div>
                      <a href="#" class="text-primary d-block mt-1">Show on Map</a>
                    </div>
                  </li>
                  <hr/>
                  <li class="d-flex align-items-center">
                    <i class="bi bi-globe me-3 fs-5"></i>
                    <a href="${data.website}" class="text-decoration-none">${data.website}</a>
                  </li>
                </ul>
                <hr />
                <div class="d-flex justify-content-center gap-3">
                  ${data.socialMedia.facebook ? `<a href="https://${data.socialMedia.facebook}" target="_blank" class="text-primary fs-5"><i class="bi bi-facebook"></i></a>` : ''}
                  ${data.socialMedia.twitter ? `<a href="https://${data.socialMedia.twitter}" target="_blank" class="text-primary fs-5"><i class="bi bi-twitter"></i></a>` : ''}
                  ${data.socialMedia.linkedin ? `<a href="https://${data.socialMedia.linkedin}" target="_blank" class="text-primary fs-5"><i class="bi bi-linkedin"></i></a>` : ''}
                  ${data.socialMedia.pinterest ? `<a href="https://${data.socialMedia.pinterest}" target="_blank" class="text-danger fs-5"><i class="bi bi-pinterest"></i></a>` : ''}
                </div>
                <div class="text-center">
                  <button class="btn btn-danger w-100 mb-3" style="font-weight: bold;">
                    <i class="bi bi-download me-2"></i> Download vCard
                  </button>
                  <button class="btn btn-outline-secondary w-100" style="font-weight: bold;">
                    <i class="bi bi-share me-2"></i> Share This Page
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
        </body>
        </html>
      `);
      newWindow.document.close(); // Ensure the document is fully loaded
    }
  };
  

  return (
    <div>
      <FormComponent onSubmit={handleFormSubmit} />
    </div>
  );
}

export default TemplateComponent;
