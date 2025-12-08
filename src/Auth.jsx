import React, { useState } from "react";
import "./Auth.css";
import { useNavigate } from "react-router-dom";
import { loginUser, signupUser } from "./api/auth";
import API from "./api/axiosInstance"; // to call /users/me

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

  // ============================
  // HANDLE LOGIN / SIGNUP
  // ============================
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let response;

      if (isLogin) {
        // -------- LOGIN --------
        response = await loginUser({
          email: form.email,
          password: form.password,
        });

        // loginUser returns ONLY token
        localStorage.setItem("token", response.token);

        // get user info
        const me = await API.get("/users/me");

        if (me.data.role === "student") {
          navigate("/student-dashboard");
        } else {
          navigate("/mentor-dashboard");
        }
      } else {
        // -------- SIGNUP --------
        await signupUser({
          name: form.name,
          email: form.email,
          password: form.password,
          role: form.role,
        });

        alert("Signup successful! Please login now.");
        setIsLogin(true); // switch to login mode
      }
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">

        {/* RIGHT SIDE (Your original UI) */}
        <div className="auth-right">
          <h1 className="auth-title">COMMIT CONNECT</h1>

          {/* Login - Signup Toggle */}
          <div className="toggle-box">
            <button
              className={`toggle-btn ${isLogin ? "active" : ""}`}
              type="button"
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>

            <button
              className={`toggle-btn ${!isLogin ? "active" : ""}`}
              type="button"
              onClick={() => setIsLogin(false)}
            >
              Signup
            </button>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            
            {/* SIGNUP extra fields */}
            {!isLogin && (
              <>
                <label>Name</label>
                <input
                  name="name"
                  onChange={handleChange}
                  required
                />

                <label>Role</label>
                <select
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                >
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
