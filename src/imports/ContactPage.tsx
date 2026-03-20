import React, { useState } from 'react';
import './contact-styles.css';
import logoImage from '../assets/logo.png';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    agreed: false
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    };

    // First Name Validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = 'First name must be at least 2 characters';
    } else if (!/^[a-zA-Z\s'-]+$/.test(formData.firstName)) {
      newErrors.firstName = 'First name can only contain letters, spaces, hyphens, and apostrophes';
    }

    // Last Name Validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = 'Last name must be at least 2 characters';
    } else if (!/^[a-zA-Z\s'-]+$/.test(formData.lastName)) {
      newErrors.lastName = 'Last name can only contain letters, spaces, hyphens, and apostrophes';
    }

    // Email Validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Message Validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.values(newErrors).every(error => error === '');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', formData);
      alert('Thank you for your message! We will get back to you soon.');
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        agreed: false
      });
    }
  };

  return (
    <div className="contact-page-wrapper">
      {/* Navigation Bar */}
      <nav className="contact-navbar">
        <div className="logo">
          <img src={logoImage} alt="Ateion Logo" />
        </div>
        <div className="nav-links">
          <a href="#about">About Us</a>
          <div className="nav-dropdown">
            <button>Workshops ▼</button>
          </div>
          <a href="#gco">GCO</a>
          <a href="#learn">Learn</a>
        </div>
        <button className="get-connected-btn">Get Connected</button>
      </nav>

      {/* Main Content */}
      <div className="contact-main-content">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-description">
          The Global Capability Olympiad is the world's first preparation-free, syllabus-free, AI-integrated Master Olympiad designed to measure thinking, not memory.
        </p>

        {/* Action Buttons */}
        <div className="contact-action-buttons">
          <button className="btn-outline">Contact us</button>
          <button className="btn-filled">Explore more</button>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                placeholder="First name *"
                value={formData.firstName}
                onChange={handleChange}
                className={errors.firstName ? 'input-error' : ''}
              />
              {errors.firstName && <span className="error-message">{errors.firstName}</span>}
            </div>

            <div className="form-group">
              <input
                type="text"
                name="lastName"
                placeholder="Last name *"
                value={formData.lastName}
                onChange={handleChange}
                className={errors.lastName ? 'input-error' : ''}
              />
              {errors.lastName && <span className="error-message">{errors.lastName}</span>}
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'input-error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Type message..."
              value={formData.message}
              onChange={handleChange}
              className={`message-textarea ${errors.message ? 'input-error' : ''}`}
            ></textarea>
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>

          <div className="form-footer">
            <label className="privacy-label">
              <input 
                type="checkbox" 
                name="agreed"
                checked={formData.agreed}
                onChange={handleChange}
              />
              I understand that Ateion will securely hold my data in accordance with their privacy policy
            </label>
            <button type="submit" className="submit-btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}