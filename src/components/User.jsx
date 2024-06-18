import React, { useState } from "react";
import "./User.css";

function User() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
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
    if (!formData.password) {
      formErrors.password = "Password is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.username)) {
      formErrors.username = "Username is already taken!";
    }
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      alert("Form submitted successfully");
      setFormData({
        username: "",
        password: "",
      });
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <main>
      <div className="user-container">
        <div className="custom-userheading4"> Hello!</div>
        <div className="custom-text">
          Please choose how you want to proceed.
        </div>

        <div className="user2-container">
          <div className="user2-containerforma">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <h2 className="custom-userheading5"> Login</h2>
                <h2 className="custom-userheading5"> Continue as a guest</h2>
              </div>

              <div className="form-row">
                <div>
                  <label htmlFor="username">Username</label>
                  <input
                    type="username"
                    id="username"
                    name="username"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {errors.username && (
                    <p className="error">{errors.username}</p>
                  )}
                </div>

                <div>
                  <button type="submit">Continue</button>
                </div>
              </div>

              <div className="form-row">
                <div>
                  <label htmlFor="email">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.password && (
                    <p className="error">{errors.password}</p>
                  )}
                </div>
              </div>

              <div className="form-row">
                <div>
                  <button type="submit">Sign in</button>
                </div>
              </div>

              <button type="submit">Create account</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default User;
