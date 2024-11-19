// import React, { useState } from 'react';
// import './FormComponent.css'; // Import external CSS file for styling
 
// const FormComponent = ({ sub }) => {
//   const [formValues, setFormValues] = useState({
//     name: '',
//     designation: '',
//     phone: '',
//     email: '',
//     company: '',
//     address: '',
//     website: '',
//     profileImage: '', // Added profileImage field
//     socialMedia: {
//       facebook: '',
//       twitter: '',
//       linkedin: '',
//       pinterest: '',
//       instagram: '',
//     },
//   });
 
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name.startsWith('socialMedia.')) {
//       const socialKey = name.split('.')[1];
//       setFormValues((prev) => ({
//         ...prev,
//         socialMedia: { ...prev.socialMedia, [socialKey]: value },
//       }));
//     } else {
//       setFormValues({ ...formValues, [name]: value });
//     }
//   };
 
//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         setFormValues((prev) => ({ ...prev, profileImage: reader.result }));
//       };
//       reader.readAsDataURL(file); // Convert image to Base64
//     }
//   };
 
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     sub(formValues);
//   };
 
//   return (
//     <div className='bgcolor'>
//     <form className="form-container-professional" onSubmit={handleSubmit}>
//       <h2 className="form-title-professional">Create Professional Profile</h2>
//       <div className="form-group">
//         <input
//           className="form-input-professional"
//           name="name"
//           placeholder="Full Name"
//           onChange={handleChange}
//         />
//       </div>
//       <div className="form-group">
//         <input
//           className="form-input-professional"
//           name="designation"
//           placeholder="Designation"
//           onChange={handleChange}
//         />
//       </div>
//       <div className="form-group">
//         <input
//           className="form-input-professional"
//           name="phone"
//           placeholder="Phone Number"
//           onChange={handleChange}
//         />
//       </div>
//       <div className="form-group">
//         <input
//           className="form-input-professional"
//           name="email"
//           placeholder="Email Address"
//           onChange={handleChange}
//         />
//       </div>
//       <div className="form-group">
//         <input
//           className="form-input-professional"
//           name="company"
//           placeholder="Company Name"
//           onChange={handleChange}
//         />
//       </div>
//       <div className="form-group">
//         <textarea
//           className="form-textarea-professional"
//           name="address"
//           placeholder="Company Address"
//           onChange={handleChange}
//         ></textarea>
//       </div>
//       <div className="form-group">
//         <input
//           className="form-input-professional"
//           name="website"
//           placeholder="Website URL"
//           onChange={handleChange}
//         />
//       </div>
//       <div className="form-group">
//         <input
//           className="form-input-professional"
//           name="socialMedia.facebook"
//           placeholder="Facebook Link"
//           onChange={handleChange}
//         />
//       </div>
//       <div className="form-group">
//         <input
//           className="form-input-professional"
//           name="socialMedia.twitter"
//           placeholder="Twitter Link"
//           onChange={handleChange}
//         />
//       </div>
//       <div className="form-group">
//         <input
//           className="form-input-professional"
//           name="socialMedia.linkedin"
//           placeholder="LinkedIn Link"
//           onChange={handleChange}
//         />
//       </div>
//       <div className="form-group">
//         <input
//           className="form-input-professional"
//           name="socialMedia.pinterest"
//           placeholder="Pinterest Link"
//           onChange={handleChange}
//         />
//       </div>
//       <div className="form-group">
//         <input
//           className="form-input-professional"
//           name="socialMedia.instagram"
//           placeholder="Instagram Link"
//           onChange={handleChange}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="profileImage" className="file-label-professional">
//           Upload Profile Image:
//         </label>
//         <input
//           type="file"
//           id="profileImage"
//           accept="image/*"
//           className="file-input-professional"
//           onChange={handleImageUpload}
//         />
//       </div>
//       <button type="submit" className="form-button-professional">
//         Create Profile
//       </button>
//     </form>
//     </div>
//   );
// };
 
// export default FormComponent;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    organization: "",
    photo: "",
    address:"",
    designation:"",
    website:""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData((prevData) => ({
          ...prevData,
          photo: reader.result.split(",")[1], // Extract Base64
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams(formData).toString();
    navigate(`/display?${queryParams}`);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>Enter Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
          />
        </div>
        <div>
          <label>Organization:</label>
          <input
            type="text"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            placeholder="Organization"
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="address"
            required
          />
        </div>
        <div>
          <label>Designation:</label>
          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            placeholder="designation"
            required
          />
        </div>
        <div>
          <label>Profile Image:</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </div>
        <button
          type="submit"
          style={{
            marginTop: "10px",
            padding: "10px 15px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
