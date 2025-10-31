import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ For back navigation
import "../../css/ProfilePage.css";
import {
  FileText,
  Clock,
  AlertCircle,
  CheckCircle2,
  Mail,
  Phone,
  Calendar,
  MapPin,
  User,
  ArrowLeft, // ✅ Added this icon
} from "lucide-react";

const ProfilePage = () => {
  const navigate = useNavigate(); // ✅ Hook for navigation

  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+63 912 345 6789",
    role: "Student • Computer Science",
    studentId: "2021-00123",
    joinDate: "September 2021",
    password: "",
  });

  const [activeTab, setActiveTab] = useState("requests");


  const getInitials = (name) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
  };

  return (
    <div className="profile-page">
      {/* ===== Header Section ===== */}
      <div className="profile-header" style={{ backgroundImage: `url(/loginpic.jpg)` }}>
        <div className="profile-header-overlay"></div>

        {/* ✅ Back Button */}
        <button className="back-button" onClick={() => navigate("/buildings")}>
          <ArrowLeft size={20} />
          <span>Back to Dashboard</span>
        </button>

        <div className="profile-header-content">
          <div className="avatar-circle">{getInitials(formData.name)}</div>
          <div>
            <h2>{formData.name}</h2>
            <p>{formData.role}</p>
            <p className="email">{formData.email}</p>
          </div>
        </div>
      </div>

      {/* ===== Profile Information Section ===== */}
      <div className="profile-body">
        <div className="profile-card">
          <h3>Profile Information</h3>
          <p className="subtitle">View and manage your personal information</p>

          <form className="profile-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <div className="icon-input">
                <User size={16} />
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
              </div>
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <div className="icon-input">
                <Mail size={16} />
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
              </div>
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <div className="icon-input">
                <Phone size={16} />
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
              </div>
            </div>

            <div className="form-group">
              <label>Student ID</label>
              <input type="text" name="studentId" value={formData.studentId} readOnly />
            </div>

            <div className="form-group">
              <label>Department</label>
              <div className="icon-input">
                <MapPin size={16} />
                <input type="text" name="role" value={formData.role} readOnly />
              </div>
            </div>

            <div className="form-group">
              <label>Member Since</label>
              <div className="icon-input">
                <Calendar size={16} />
                <input type="text" value={formData.joinDate} readOnly />
              </div>
            </div>

            <div className="form-group full-width">
              <label>New Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter new password"
              />
            </div>

            <div className="form-actions">
              <button type="submit" className="save-btn">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* ===== Tabs Section ===== */}
      <div className="tabs-section">
        <div className="tabs">
          <button
            className={activeTab === "requests" ? "active" : ""}
            onClick={() => setActiveTab("requests")}
          >
            My Requests
          </button>
          <button
            className={activeTab === "activity" ? "active" : ""}
            onClick={() => setActiveTab("activity")}
          >
            Activity Log
          </button>
          <button
            className={activeTab === "settings" ? "active" : ""}
            onClick={() => setActiveTab("settings")}
          >
            Settings
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "requests" && (
            <div className="tab-box">
              <h4>My Maintenance Requests</h4>
              <p>Here you can view your past and current maintenance reports.</p>
            </div>
          )}
          {activeTab === "activity" && (
            <div className="tab-box">
              <h4>Activity Log</h4>
              <p>Recent actions and updates will appear here.</p>
            </div>
          )}
          {activeTab === "settings" && (
            <div className="tab-box">
              <h4>Settings</h4>
              <p>Manage notifications, sessions, and security here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
