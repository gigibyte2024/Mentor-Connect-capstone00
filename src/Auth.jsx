import React, { useState } from "react";
import "./Auth.css";
import { useNavigate } from "react-router-dom";
import { loginUser, signupUser } from "./api/auth";
import API from "./api/axiosInstance";

const Auth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res;

      if (isLogin) {
        // LOGIN
        res = await loginUser({
          email: form.email,
          password: form.password,
        });

        localStorage.setItem("token", res.data.token);

        const me = await API.get("/users/me");
        const role = me.data.role;

        if (role === "student") navigate("/student-dashboard");
        else navigate("/mentor-dashboard");
      } else {
        // SIGNUP
        await signupUser(form);
        alert("Signup successful! Please log in.");
        setIsLogin(true);
      }
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">

        {/* LEFT IMAGE */}
        <div className="auth-left">
          <img
            className="auth-image"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS5v4eZ7fQNCPFm7Wdx6STLtT51YEKBRL2srDW0ZQb3OM9s4ebVric7l7OUhERRaoGO9Dr5bbgCtNmSIgq2F8RjSTshe0yLCb-8OtA1FW5molq1FrfqctkeoXCZoiLlBd0LZG9xOromif4HsmLU4RNxs12gpLIKRhGh_-IbASjrdhdPAlaBhoc5nllWz5k6PvNexlDmqMO_U_3YtwLPtvdeujxgROZmPXyz-nKxHYZkLThzGq9j2i97qZxG0It2KZUi1RM6RNCfnk"
            alt="auth-bg"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="auth-right">

          <h1 className="auth-title">COMMIT CONNECT</h1>

          <div className="auth-title-bars">
            <div className="bar bar-cyan"></div>
            <div className="bar bar-magenta"></div>
            <div className="bar bar-light"></div>
          </div>

          <p className="welcome">{isLogin ? "Welcome Back" : "Create Account"}</p>
          <p className="subtitle">
            {isLogin
              ? "Sign in to continue your journey"
              : "Join the grid — signup below"}
          </p>

          {/* TOGGLE SWITCH */}
          <div className="toggle-box">
            <button
              className={`toggle-btn ${isLogin ? "active" : ""}`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>

            <button
              className={`toggle-btn ${!isLogin ? "active" : ""}`}
              onClick={() => setIsLogin(false)}
            >
              Signup
            </button>
          </div>

          {/* FORM */}
          <form className="auth-form" onSubmit={handleSubmit}>
            {!isLogin && (
              <>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  required
                />

                <label>Role</label>
                <select name="role" onChange={handleChange}>
                  <option value="student">Student</option>
                  <option value="mentor">Mentor</option>
                </select>
              </>
            )}

            <label>Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              required
            />

            <label>Password</label>
            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="eye-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁"}
              </button>
            </div>

            {isLogin && (
              <p className="forgot">Forgot password?</p>
            )}

            <button className="login-btn" type="submit">
              {isLogin ? "Login" : "Signup"}
            </button>

            {isLogin ? (
              <p className="signup-text">
                Don't have an account? <a onClick={() => setIsLogin(false)}>Sign up</a>
              </p>
            ) : (
              <p className="signup-text">
                Already have an account? <a onClick={() => setIsLogin(true)}>Login</a>
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
