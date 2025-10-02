import React, { useState } from "react";
import "./ProfileSetup.css";
import ProgressBar from "./ProgressBar";

const ProfileSetup = ({ onContinue }) => {
  const [profileData, setProfileData] = useState({
    bio: "",
    description: "",
    document: null,
    profileImage: null,
  });

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProfileData({
        ...profileData,
        profileImage: URL.createObjectURL(file),
      });
    }
  };
  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setProfileData({
      ...profileData,
      document: e.target.files ? e.target.files[0] : null,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onContinue(profileData);
  };

  return (
    <div className="page-profile">
      <h2 className="access-2">
        Get access to over 100M+ <br /> clients who needs your services
      </h2>
      <div className="card-2">
        <div className="logo">
          <img src="/Images/Logo.png" alt="logo" />
        </div>
        <h2>Profile Setup</h2>

        <ProgressBar step={2} />

        {/* form*/}
        <form onSubmit={handleSubmit}>
          <div className="profile-image-upload">
            <label htmlFor="profileImage">
              {/* profile-image sector*/}
              <div className="image-preview">
                {profileData.profileImage ? (
                  <img src={profileData.profileImage} alt="Profile" />
                ) : (
                  <span className="upload-placeholder">+</span>
                )}
              </div>
            </label>

            <input
              type="file"
              id="profileImage"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
              required
            />
          </div>

          {/* bio*/}
          <label>Bio</label>
          <input
            type="text"
            name="bio"
            placeholder="Tell us about yourself"
            value={profileData.bio}
            onChange={handleChange}
            required
          />

          {/*description */}
          <label>Description</label>
          <textarea
            name="description"
            placeholder="Enter a description"
            value={profileData.description}
            onChange={handleChange}
            required
          />

          <label>Business Verification Document</label>
          <div className="document-upload">
            <label htmlFor="documentUpload" className="upload-box">
              <span className="upload-icon">
                {" "}
                <img src="/Images/arrow up.svg" />{" "}
              </span>
              <span className="upload-text">
                {profileData.document ? profileData.document.name : ""}
              </span>
            </label>

            {/* document upload*/}
            <input
              type="file"
              id="documentUpload"
              accept=".pdf,.doc,.docx,.jpg,.png"
              onChange={handleFileChange}
              style={{ display: "none" }}
              required
            />
          </div>

          <button type="submit">Continue</button>
        </form>
      </div>
    </div>
  );
};

export default ProfileSetup;
