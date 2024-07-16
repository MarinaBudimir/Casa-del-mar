import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.email) {
      formErrors.email = "E-mail is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "E-mail is invalid";
    }
    if (!formData.message) formErrors.message = "Message is required";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      alert("Form submitted successfully");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <main>
      <div className="contact-container">
        <h1>Contact us </h1>
        <p>Any question or remarks? Just send us a message!</p>

        <div className="contact2-container">
          <div className="contact2-content">
            <div className="contact2-containerforma">
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div>
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                    {errors.firstName && (
                      <p className="error">{errors.firstName}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                    {errors.lastName && (
                      <p className="error">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <div>
                    <label htmlFor="email">E-mail address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone">Phone number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && <p className="error">{errors.phone}</p>}
                  </div>
                </div>

                <div className="form-row">
                  <div style={{ gridColumn: "span 2" }}>
                    <label htmlFor="message">Message</label>
                    <textarea
                      type="message"
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="no-resize"
                    />
                    {errors.message && (
                      <p className="error">{errors.message}</p>
                    )}
                  </div>
                </div>

                <button type="submit">Send Message</button>
              </form>
            </div>
            <div className="rectangle"></div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
