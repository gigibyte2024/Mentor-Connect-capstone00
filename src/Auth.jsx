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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // LOGIN + SIGNUP HANDLER
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let response;

      // ---------------------- LOGIN ----------------------
      if (isLogin) {
        response = await loginUser({
          email: form.email,
          password: form.password,
        });

        // Save token
        localStorage.setItem("token", response.data.token);

        // Get logged-in user
        const me = await API.get("/users/me");

        const userRole = me.data.role;

        if (userRole === "student") navigate("/student-dashboard");
        else navigate("/mentor-dashboard");
      }

      // ---------------------- SIGNUP ----------------------
      else {
        await signupUser({
          name: form.name,
          email: form.email,
          password: form.password,
          role: form.role,
        });

        alert("Signup successful! Please login now.");
        setIsLogin(true);
      }
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <div className="auth-right">
          <h1 className="auth-title">COMMIT CONNECT</h1>

          {/* TOGGLE LOGIN / SIGNUP */}
          <div className="toggle-box">
            <button
              className={`toggle-btn ${isLogin ? "active" : ""}`}
              onClick={() => setIsLogin(true)}
              type="button"
            >
              Login
            </button>

            <button
              className={`toggle-btn ${!isLogin ? "active" : ""}`}
              onClick={() => setIsLogin(false)}
              type="button"
            >
              Signup
            </button>
          </div>

          {/* FORM */}
          <form className="auth-form" onSubmit={handleSubmit}>

            {/* SHOW ONLY IN SIGNUP MODE */}
            {!isLogin && (
              <>
                <label>Name</label>
                <input name="name" onChange={handleChange} required />

                <label>Role</label>
                <select name="role" onChange={handleChange}>
                  <option value="student">Student</option>
                  <option value="mentor">Mentor</option>
                </select>
              </>
            )}

            <label>Email</label>
            <input
              name="email"
              type="email"
              onChange={handleChange}
              required
            />

            <label>Password</label>
            <input
              name="password"
              type="password"
              onChange={handleChange}
              required
            />

            <button type="submit" className="login-btn">
              {isLogin ? "Login" : "Signup"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
