import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormComponent from './components/FormComponent';

function TemplateComponent() {
  const [formData, setFormData] = useState(null);
  const navigate = useNavigate();

  const handleFormSubmit = (data) => {
    setFormData(data);
    const profileUrl = generateSharableLink(data);
    navigate(`/profile?${profileUrl}`);
  };

  const generateSharableLink = (data) => {
    const queryParams = new URLSearchParams({
      ...data,
      facebook: data.socialMedia.facebook,
      twitter: data.socialMedia.twitter,
      linkedin: data.socialMedia.linkedin,
      pinterest: data.socialMedia.pinterest,
      instagram: data.socialMedia.instagram,
    }).toString();
    return queryParams;
  };

  return (
    <div>
      <FormComponent sub={handleFormSubmit} />
    </div>
  );
}

export default TemplateComponent;
