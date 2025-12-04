import React from "react";
import "./Auth.css";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const role = localStorage.getItem("selectedRole");

    if (role === "student") {
      navigate("/student-dashboard");
    } else {
      navigate("/mentor-dashboard");
    }
  };

  return (
    <div className="auth-wrapper">

      <div className="auth-card">

        {/* LEFT IMAGE */}
        <div className="auth-left">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS5v4eZ7fQNCPFm7Wdx6STLtT51YEKBRL2srDW0ZQb3OM9s4ebVric7l7OUhERRaoGO9Dr5bbgCtNmSIgq2F8RjSTshe0yLCb-8OtA1FW5molq1FrfqctkeoXCZoiLlBd0LZG9xOromif4HsmLU4RNxs12gpLIKRhGh_-IbASjrdhdPAlaBhoc5nllWz5k6PvNexlDmqMO_U_3YtwLPtvdeujxgROZmPXyz-nKxHYZkLThzGq9j2i97qZxG0It2KZUi1RM6RNCfnk"
            alt="Cyberpunk Illustration"
            className="auth-image"
          />
        </div>

        {/* RIGHT AREA */}
        <div className="auth-right">

          <h1 className="auth-title">COMMIT CONNECT</h1>

          <div className="auth-title-bars">
            <div className="bar bar-cyan"></div>
            <div className="bar bar-magenta"></div>
            <div className="bar bar-light"></div>
          </div>

          <h2 className="welcome">Welcome Back</h2>
          <p className="subtitle">Sign in to continue your journey on the grid</p>

          <div className="toggle-box">
            <button className="toggle-btn active">Login</button>
            <button className="toggle-btn">Signup</button>
          </div>

          <form className="auth-form" onSubmit={handleLogin}>
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" required />

            <label>Password</label>
            <div className="password-field">
              <input type="password" placeholder="Enter your password" required />
              <button type="button" className="eye-btn">👁</button>
            </div>

            <a className="forgot" href="#">Forgot password?</a>

            <button type="submit" className="login-btn">Login</button>
          </form>

          <p className="signup-text">
            Don’t have an account? <a href="#">Sign up</a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Auth;
