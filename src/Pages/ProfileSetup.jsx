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
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProfileData({
        ...profileData,
        profileImage: file,
        profileImagePreview: URL.createObjectURL(file),
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
    if (typeof onContinue === "function") {
      onContinue(profileData);
    }
  }
/*
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { bio, description, document, profileImage } = profileData;
    if (!bio || !description || !document || !profileImage) {
      alert("All fields are required.");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("bio", bio);
      formData.append("description", description);
      formData.append("document", document);
      formData.append("profileImage", profileImage);


      const response = await fetch("http://localhost:5000/api/auth/profile-setup", {
        method: "POST",
        body: formData,

      })

      const data = await response.json();
      setLoading(false);

      if (!response.ok) {
        alert(data.message || "Failed to save profile. Try again.");
        return;
      }

      alert("Profile setup completed successfully!");
      onContinue(data);
    } catch (error) {
      setLoading(false);
      console.error("Profile setup error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };*/


  return (
    <div className="page-profile">
      <h2 className="access-2">
        Get access to over 100M+ <br /> clients who need your services
      </h2>
      <div className="card-2">
        <div className="logo">
          <img src="/Images/Logo.png" alt="logo" />
        </div>
        <h2>Profile Setup</h2>

        <ProgressBar step={2} />

        <form onSubmit={handleSubmit}>
          {/* Profile Image */}
          <div className="profile-image-upload">
            <label htmlFor="profileImage">
              <div className="image-preview">
                {profileData.profileImagePreview ? (
                  <img src={profileData.profileImagePreview} alt="Profile" />
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


          {/* Bio */}
          <label>Bio</label>
          <input
            type="text"
            name="bio"
            placeholder="Tell us about yourself"
            value={profileData.bio}
            onChange={handleChange}
            required
          />

          {/* Description */}
          <label>Description</label>
          <textarea
            name="description"
            placeholder="Enter a description"
            value={profileData.description}
            onChange={handleChange}
            required
          />

          {/* Document */}

          <label>Business Verification Document</label>
          <div className="document-upload">

            <label htmlFor="documentUpload" className="upload-box">
              <span className="upload-icon">
                <img src="/Images/arrow up.svg" alt="upload" />
              </span>
              <span className="upload-text">
                {profileData.document ? profileData.document.name : "Upload document"}
              </span>
            </label>

            <input
              type="file"
              id="documentUpload"
              accept=".pdf,.doc,.docx,.jpg,.png"
              onChange={handleFileChange}
              style={{ display: "none" }}
              required
            />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Saving..." : "Continue"}
          </button>
        </form>
      </div>
    </div>
  );
};


export default ProfileSetup;

