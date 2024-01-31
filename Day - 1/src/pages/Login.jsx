import "../assets/css/Signin.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault(); 

    if (!email.trim()) {
      alert("Email is required");
      return;
    }

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      return;
    }

  
    if (email === "admin@zencloud.in") {
      
      navigate('/dashboard', { state: { user: { name: 'Admin', email: email } } });
    } else {
     
      navigate('/', { state: { user: { name: 'John Doe', email: email } } });
    }
  };

  return (
    <>
    <Navbar/>
      <div className="bb">
        <div className="lt dark-mode">
          <div className="round1">
            <form onSubmit={handleSignIn}>
              <h3>Sign In</h3>
              <div className="mb-2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="form-control"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="password">Password </label>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="form-control"
                  value={password}
                  required
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError("");
                  }}
                />
                {passwordError && <span className="error">{passwordError}</span>}
              </div>
              <div className="login-link-cont">
                <Link className="l11">Forgot Password?</Link>
              </div>
              <div className="d-grid">
                <button type="submit" className="btnn">
                  Sign In
                </button>
                <br /><br/>
              </div>
              <div className="login-link-cont">
                <p>New User?</p>
                <Link to={"/register"} className="l2">
                  Sign Up
                </Link>
              </div>
            </form>
          </div>
          <p className="copyright">&copy; Zencloud-Ascent 2024</p>
        </div>
      </div>
    </>
  );
}

export default Login;
