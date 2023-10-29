import React from 'react';
import './NewsDetails.css';
import './webDetails.css'

const NewsDetails = ({ title, content, onClose }) => {
  return (
    <div className="news-details-overlay" onClick={onClose}>
      <div className="news-details-card">
        <p>{title}</p>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default NewsDetails;
