import React from "react";
import { X, Download, MapPin, AlertTriangle, CheckCircle, Clock } from "lucide-react";
import "../css/components_css/IssueViewModal.css";

const PRIORITY_LABELS = {
  HIGH: "High Priority",
  MEDIUM: "Medium Priority",
  LOW: "Low Priority",
};

const STATUS_LABELS = {
  ACTIVE: "Active",
  FIXED: "Resolved",
  PENDING: "Pending",
};

export default function IssueViewModal({ isOpen, onClose, issue = {} }) {
  if (!isOpen) return null;

  const getPriorityClass = (priority) => {
    switch (priority?.toUpperCase()) {
      case "HIGH":
        return "priority-high";
      case "MEDIUM":
        return "priority-medium";
      case "LOW":
        return "priority-low";
      default:
        return "priority-medium";
    }
  };

  const getStatusClass = (status) => {
    switch (status?.toUpperCase()) {
      case "FIXED":
        return "status-resolved";
      case "ACTIVE":
        return "status-active";
      default:
        return "status-pending";
    }
  };

  const getStatusIcon = (status) => {
    switch (status?.toUpperCase()) {
      case "FIXED":
        return <CheckCircle size={16} />;
      case "ACTIVE":
        return <Clock size={16} />;
      default:
        return <AlertTriangle size={16} />;
    }
  };

  // Check if file is downloadable (PDF/DOC/DOCX)
  const isDownloadableFile = (url) => {
    if (!url) return false;
    return /\.(pdf|doc|docx)$/i.test(url.split("?")[0]);
  };

  const isResolved = issue.issueStatus?.toUpperCase() === "FIXED";

  return (
    <div className="issue-view-modal-overlay" onClick={onClose}>
      <div className="issue-view-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="issue-view-modal-close" onClick={onClose} aria-label="Close modal">
          <X size={24} />
        </button>

        <h2 className="issue-view-modal-title">Issue Details</h2>

        {/* Issue Photo */}
        {issue.issuePhotoUrl && (
          <div className="issue-view-photo-container">
            <img
              src={issue.issuePhotoUrl}
              alt="Issue"
              className="issue-view-photo"
            />
          </div>
        )}

        {/* Issue Title */}
        <div className="issue-view-section">
          <h3 className="issue-view-issue-title">{issue.issueTitle || "No Title"}</h3>
        </div>

        {/* Status and Priority Badges */}
        <div className="issue-view-badges">
          <span className={`issue-view-badge ${getStatusClass(issue.issueStatus)}`}>
            {getStatusIcon(issue.issueStatus)}
            {STATUS_LABELS[issue.issueStatus?.toUpperCase()] || issue.issueStatus || "Unknown"}
          </span>
          <span className={`issue-view-badge ${getPriorityClass(issue.issuePriority)}`}>
            <AlertTriangle size={16} />
            {PRIORITY_LABELS[issue.issuePriority?.toUpperCase()] || issue.issuePriority || "Unknown"}
          </span>
        </div>

        {/* Description */}
        <div className="issue-view-section">
          <label className="issue-view-label">Description</label>
          <p className="issue-view-description">
            {issue.issueDescription || "No description provided."}
          </p>
        </div>

        {/* Location */}
        <div className="issue-view-section">
          <label className="issue-view-label">
            <MapPin size={16} /> Location
          </label>
          <div className="issue-view-location">
            <span className="issue-view-building">
              {issue.issueLocation || "Not specified"}
            </span>
            {issue.exactLocation && (
              <span className="issue-view-exact-location">
                — {issue.exactLocation}
              </span>
            )}
          </div>
        </div>

        {/* Resolution Section (only for resolved issues) */}
        {isResolved && (
          <div className="issue-view-resolution-section">
            <h4 className="issue-view-resolution-title">
              <CheckCircle size={18} /> Resolution Details
            </h4>
            
            {issue.resolvedByName && (
              <div className="issue-view-resolver">
                <label className="issue-view-label">Resolved By</label>
                <p>{issue.resolvedByName}</p>
              </div>
            )}

            {/* Download Report Button */}
            {issue.issueReportFile && isDownloadableFile(issue.issueReportFile) && (
              <div className="issue-view-download">
                <a
                  href={issue.issueReportFile}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="issue-view-download-btn"
                >
                  <Download size={18} />
                  Download Report
                </a>
              </div>
            )}
          </div>
        )}

        {/* Date Information */}
        <div className="issue-view-dates">
          {issue.createdAt && (
            <span className="issue-view-date">
              Reported: {new Date(issue.createdAt).toLocaleDateString()}
            </span>
          )}
          {issue.updatedAt && (
            <span className="issue-view-date">
              Updated: {new Date(issue.updatedAt).toLocaleDateString()}
            </span>
          )}
        </div>

        {/* Close Button */}
        <div className="issue-view-actions">
          <button className="issue-view-close-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
