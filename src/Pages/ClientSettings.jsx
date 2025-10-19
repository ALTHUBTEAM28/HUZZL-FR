import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./VendorSettings.css";


const Settings = () => {
  const [user, setUser] = useState({
    name: "Phena",
    email: "Tryphena24@gmail.com",
    phone: "08101222222",
    bio: "Hi, there! I'm using Huzzl",
    profilePic: "https://via.placeholder.com/120",
    publicProfile: true,
    emailNotification: true,
    bookingAlert: true,
  });

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();



  // Mock API simulation
  const simulateApiCall = (action) =>
    new Promise((resolve) => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        resolve(`${action} successful`);
      }, 1500);
    });



  // handle updates
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUser({ ...user, [name]: type === "checkbox" ? checked : value });
  };



  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setUser({ ...user, profilePic: reader.result });
      reader.readAsDataURL(file);
    }
  };



  const handleSaveChanges = () => {
    alert(" Settings updated successfully!");
  };

  const handleOpenModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  const handleCancel = () => {
    setShowModal(false);
    setModalType(null);
  };



  const handleConfirm = async () => {
    setLoading(true);
    try {
      if (modalType === "delete") {
        await simulateApiCall("Account deletion");
        localStorage.clear();
        navigate("/signup");
      } else if (modalType === "deactivate") {
        await simulateApiCall("Account deactivation");
        localStorage.removeItem("userToken");
        navigate("/login");
      } else if (modalType === "logout") {
        await simulateApiCall("Logout");
        alert(" Logged out from all devices!");
      } else if (modalType === "password") {
        await simulateApiCall("Password reset");
        alert(" Password reset link sent to your email!");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setShowModal(false);
      setLoading(false);
    }
  };



  return (

    <div className="settings-container">
      <h2 className="settings-header">Account Settings</h2>
      <p className="settings-sub">
        Manage your Huzzl account preferences and security.
      </p>

      {/* PROFILE SETTINGS */}
      <div className="settings-section">
        <h3>Profile Settings</h3>
        <div className="profile-pic-section">
          <img src={user.profilePic} alt="Profile" className="profile-pic" />
          <input type="file" onChange={handleProfilePicChange} />
        </div>

        <div className="settings-field">
          <label>Name</label>
          <input type="text" value={user.name} disabled />
        </div>

        <div className="settings-field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>



        <div className="settings-field">
          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            value={user.phone}
            onChange={handleChange}
          />
        </div>



        <div className="settings-field">
          <label>Bio</label>
          <textarea
            name="bio"
            value={user.bio}
            onChange={handleChange}
            rows={3}
          ></textarea>
        </div>

        <button className="save-btn" onClick={handleSaveChanges}>
          Save Changes
        </button>
      </div>



      {/* SECURITY SETTINGS */}

      <div className="settings-section">
        <h3>Security</h3>

        <button
          className="secondary-btn"
          onClick={() => handleOpenModal("password")}
        >
          Change Password
        </button>

        <button
          className="secondary-btn"
          onClick={() => handleOpenModal("logout")}
        >
          Logout from all devices
        </button>

      </div>



      {/* NOTIFICATIONS SETTINGS */}
      <div className="settings-section">
        <h3>Notifications</h3>

        <label className="checkbox">
          <input
            type="checkbox"
            name="emailNotification"
            checked={user.emailNotification}
            onChange={handleChange}
          />
          Email Notifications
        </label>

        <label className="checkbox">

          <input
            type="checkbox"
            name="bookingAlert"
            checked={user.bookingAlert}
            onChange={handleChange}
          />

          Booking Alerts

        </label>

      </div>


      {/* PRIVACY SETTINGS */}
      <div className="settings-section">

        <h3>Privacy</h3>
        <label className="checkbox">
          <input
            type="checkbox"
            name="publicProfile"
            checked={user.publicProfile}
            onChange={handleChange}
          />
          Public Profile
        </label>

      </div>



      {/* ACCOUNT SETTINGS */}

      <div className="settings-section">
        <h3>Account</h3>
        <button
          className="danger-btn"
          onClick={() => handleOpenModal("deactivate")}
        >
          Deactivate Account
        </button>

        <button
          className="danger-btn"
          onClick={() => handleOpenModal("delete")}
        >
          Delete Account
        </button>

      </div>



      {/* MODAL */}

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>

              {modalType === "delete"
                ? "Delete Account"
                : modalType === "deactivate"
                ? "Deactivate Account"
                : modalType === "logout"
                ? "Logout from all Devices"
                : "Change Password"}
            </h3>

            <p>

              {modalType === "delete"
                ? "This action is permanent. Once deleted, your data cannot be recovered. Proceed?"
                : modalType === "deactivate"
                ? "You can always log back in later to reactivate your account. Continue?"
                : modalType === "logout"
                ? "You'll be logged out from all devices. Continue?"
                : "A password reset link will be sent to your email."}
            </p>


            <div className="modal-buttons">
              <button className="cancel-btn" onClick={handleCancel}>
                Cancel
              </button>

              <button
                className="confirm-btn"
                onClick={handleConfirm}
                disabled={loading}
              >

                {loading
                  ? "Processing..."
                  : modalType === "delete"
                  ? "Delete"
                  : modalType === "deactivate"
                  ? "Deactivate"
                  : modalType === "logout"
                  ? "Logout"
                  : "Send Link"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;