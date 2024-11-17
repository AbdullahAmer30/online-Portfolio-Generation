import React, { useState } from 'react';

const FormComponent = ({ sub }) => {
  const [formValues, setFormValues] = useState({
    name: '',
    designation: '',
    phone: '',
    email: '',
    company: '',
    address: '',
    website: '',
    socialMedia: {
      facebook: '',
      twitter: '',
      linkedin: '',
      pinterest: '',
      instagram: '', // Added Instagram field
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('socialMedia.')) {
      const socialKey = name.split('.')[1];
      setFormValues((prev) => ({
        ...prev,
        socialMedia: { ...prev.socialMedia, [socialKey]: value },
      }));
    } else {
      setFormValues({ ...formValues, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sub(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="designation" placeholder="Designation" onChange={handleChange} />
      <input name="phone" placeholder="Phone" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="company" placeholder="Company" onChange={handleChange} />
      <textarea name="address" placeholder="Address" onChange={handleChange}></textarea>
      <input name="website" placeholder="Website" onChange={handleChange} />
      <input name="socialMedia.facebook" placeholder="Facebook Link" onChange={handleChange} />
      <input name="socialMedia.twitter" placeholder="Twitter Link" onChange={handleChange} />
      <input name="socialMedia.linkedin" placeholder="LinkedIn Link" onChange={handleChange} />
      <input name="socialMedia.pinterest" placeholder="Pinterest Link" onChange={handleChange} />
      <input name="socialMedia.instagram" placeholder="Instagram Link" onChange={handleChange} />
      <button type="submit">Create</button>
    </form>
  );
};

export default FormComponent;
