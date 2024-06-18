import React, { useState } from "react";
import "./Account.css";

function Account() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    password2: "",
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

    if (!formData.firstname) {
      formErrors.firstname = "First Name is required";
    }

    if (!formData.lastname) {
      formErrors.lastname = "Last Name is required";
    }

    if (!formData.phone) {
      formErrors.phone = "Phone number is required";
    }

    if (!formData.email) {
      formErrors.email = "E-mail address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "E-mail address is not valid";
    }

    if (!formData.username) {
      formErrors.username = "Username is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.username)) {
      formErrors.username = "Username is already taken";
    }

    if (!formData.password) {
      formErrors.password = "Password is required";
    }

    if (!formData.password2) {
      formErrors.password2 = "You must confirm password!";
    } else if (formData.password !== formData.password2) {
      formErrors.password2 = "Passwords do not match! Try again!";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      alert("Form submitted successfully");
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        username: "",
        password: "",
        password2: "",
      });
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <main>
      <div className="account-container">
        <div className="custom-accountheading4"> Welcome to Casa del mar </div>
        <div className="custom-text">
          We are overjoyed to have you join our Casa del mar community. Creating
          free account is your first step towards exploring infinite world of
          stylish furnishings and latest trends in interior design.{" "}
        </div>

        <div className="account2-container">
          <div className="account2-containerforma">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div>
                  <label htmlFor="firstname">First Name</label>
                  <input
                    type="firstname"
                    id="firstname"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                  />
                  {errors.firstname && (
                    <p className="error">{errors.firstname}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="username">Username</label>
                  <input
                    type="username"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                  {errors.username && (
                    <p className="error">{errors.username}</p>
                  )}
                </div>
              </div>

              <div className="form-row">
                <div>
                  <label htmlFor="lastname">Last Name</label>
                  <input
                    type="lastname"
                    id="lastname"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                  />
                  {errors.lastname && (
                    <p className="error">{errors.lastname}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {errors.password && (
                    <p className="error">{errors.password}</p>
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
                  <label htmlFor="password2">Confirm password</label>
                  <input
                    type="password"
                    id="password2"
                    name="password2"
                    value={formData.password2}
                    onChange={handleChange}
                  />
                  {errors.password2 && (
                    <p className="error">{errors.password2}</p>
                  )}
                </div>
              </div>

              <div className="form-row">
                <div>
                  <label htmlFor="phone">Phone number</label>
                  <input
                    type="phone"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <p className="error">{errors.phone}</p>}
                </div>

                <div>
                  <button type="submit">Create account</button>
                  <div className="accountcustom-text">
                    By signing up for a Casa del mar account you agree to our
                    Privacy Policy and Terms of Service.{" "}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Account;
