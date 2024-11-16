import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";

const TemplateComponent = ({ data }) => {
  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <Container className="mt-4 d-flex justify-content-center">
      {/* Main Card */}
      <Card className="shadow-lg w-50 " style={{ borderRadius: "10px" }}>
        {/* Header Section */}
        <Card.Header
          className="text-center text-white py-4"
          style={{
            backgroundColor: "#004d40", // Dark green background
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
        >
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
        </Card.Header>

        {/* Action Buttons */}
        <Card.Body className="bg-success text-white py-3">
          <Row>
            <Col className="text-center">
              <i className="bi bi-telephone fs-4"></i>
              <p className="mb-0 small">Call</p>
            </Col>
            <Col className="text-center">
              <i className="bi bi-envelope fs-4"></i>
              <p className="mb-0 small">Email</p>
            </Col>
            <Col className="text-center">
              <i className="bi bi-geo-alt fs-4"></i>
              <p className="mb-0 small">Directions</p>
            </Col>
          </Row>
        </Card.Body>

        {/* Content Section */}
        <Card.Body className="px-4">
          <p className="text-center">
            Our service portfolio is diverse, encompassing Architecture Design,
            Engineering Services, MEP, Structural Design, Interior Design,
            Master Planning, and more.
          </p>
          <hr />

          {/* Contact Information */}
          <ul className="list-unstyled">
            <li className="d-flex align-items-center mb-3">
              <i className="bi bi-phone me-3 fs-5"></i>
              <div>
                <div>{data.phone}</div>
                <small className="text-muted">Mobile</small>
              </div>
            </li>
            <li className="d-flex align-items-center mb-3">
              <i className="bi bi-envelope me-3 fs-5"></i>
              <div>
                <div>{data.email}</div>
                <small className="text-muted">Email</small>
              </div>
            </li>
            <li className="d-flex align-items-center mb-3">
              <i className="bi bi-building me-3 fs-5"></i>
              <div>
                <div>{data.company}</div>
                <small className="text-muted">Company</small>
              </div>
            </li>
            <li className="d-flex align-items-start mb-3">
              <i className="bi bi-geo-alt me-3 fs-5"></i>
              <div>
                <div>{data.address}</div>
                <a href="#" className="text-primary d-block mt-1">
                  Show on Map
                </a>
              </div>
            </li>
            <li className="d-flex align-items-center">
              <i className="bi bi-globe me-3 fs-5"></i>
              <a href={data.website} className="text-decoration-none">
                {data.website}
              </a>
            </li>
          </ul>
          <hr />

          {/* Social Media Icons */}
          
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
      href={data.socialMedia.instagram}
      target="_blank"
      rel="noopener noreferrer"
      className="text-danger fs-5"
    >
      <i className="bi bi-instagram"></i>
    </a>
  )}
  {data.socialMedia.linkedin && (
    <a
      href={data.socialMedia.linkedin}
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


          {/* Action Buttons */}
          <div className="text-center">
            <Button
              variant="danger"
              size="lg"
              className="w-100 mb-3"
              style={{ fontWeight: "bold" }}
            >
              <i className="bi bi-download me-2"></i> Download vCard
            </Button>
            <Button
              variant="outline-secondary"
              size="lg"
              className="w-100"
              style={{ fontWeight: "bold" }}
            >
              <i className="bi bi-share me-2"></i> Share This Page
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default TemplateComponent;
