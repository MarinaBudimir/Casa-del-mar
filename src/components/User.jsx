import React, { useState } from "react";
import "./User.css";
import { Link } from "react-router-dom";

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
        <h1> Hello!</h1>
        <p>Please choose how you want to proceed.</p>

        <div className="user2-container">
          <div className="user2-containerforma">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <h3> Login</h3>
                <h3> Continue as a guest</h3>
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
                  <button className="small-button">
                    <Link to="/userdashboard" className="link">
                      Continue
                    </Link>
                  </button>
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
                  <button type="submit">
                    {" "}
                    {""}
                    <Link to="/userdashboard" classname="link">
                      {" "}
                      Sign in
                    </Link>
                  </button>
                </div>
              </div>

              <button type="submit">
                {" "}
                <Link to="/account" classname="link">
                  {" "}
                  Create account
                </Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default User;
