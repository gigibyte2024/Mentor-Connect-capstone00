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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        // LOGIN
        const res = await loginUser({
          email: form.email,
          password: form.password,
        });

        localStorage.setItem("token", res.data.token);

        const me = await API.get("/users/me");

        if (me.data.role === "student") {
          navigate("/student-dashboard");
        } else {
          navigate("/mentor-dashboard");
        }
      } else {
        // SIGNUP
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
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-container">

        {/* LEFT IMAGE PANEL */}
        <div className="auth-left">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS5v4eZ7fQNCPFm7Wdx6STLtT51YEKBRL2srDW0ZQb3OM9s4ebVric7l7OUhERRaoGO9Dr5bbgCtNmSIgq2F8RjSTshe0yLCb-8OtA1FW5molq1FrfqctkeoXCZoiLlBd0LZG9xOromif4HsmLU4RNxs12gpLIKRhGh_-IbASjrdhdPAlaBhoc5nllWz5k6PvNexlDmqMO_U_3YtwLPtvdeujxgROZmPXyz-nKxHYZkLThzGq9j2i97qZxG0It2KZUi1RM6RNCfnk"
            alt="Cyberpunk login illustration"
            className="auth-image"
          />
        </div>

        {/* RIGHT LOGIN PANEL */}
        <div className="auth-right">
          <h1 className="auth-title">COMMIT CONNECT</h1>

          {/* LOGIN / SIGNUP TOGGLE */}
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

          <form className="auth-form" onSubmit={handleSubmit}>
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
            <input type="email" name="email" onChange={handleChange} required />

            <label>Password</label>
            <input
              type="password"
              name="password"
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
