import "./css/Navbarcss.css";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  localStorage.removeItem("user");
  localStorage.removeItem("currentRental");

  window.dispatchEvent(new Event("rentalUpdated"));
  window.dispatchEvent(new Event("authChanged")); 

  setUser(null);
  navigate("/");
};

  return (
    <nav className="navbar">
      <h1>Vroomy</h1>

      <div className="navlinks">
        <Link to="/">Home</Link>
        <Link to="/vehicles">Vehicles</Link>
        <Link to="/about">About</Link>
        <Link to="/rentals">My Rentals</Link>

        <div className="auth-links">
          {user ? (
            <>
              <span className="nav-user">Hi, {user.username || user.name}</span>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}