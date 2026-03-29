import "./css/Logincss.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Login({ setUser }) {

    const navigate = useNavigate();
    const location = useLocation();

    const [form, setForm] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:8080/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            });

            if (!res.ok) {
                const err = await res.json();
                throw new Error(err.error);
            }

            const data = await res.json();


            localStorage.setItem("token", data.jwtToken);
            localStorage.setItem("user", JSON.stringify({ username: data.username }));

            window.dispatchEvent(new Event("authChanged"));

            setUser({ username: data.username });

            const incomingVehicle = location.state?.vehicle;

            if (incomingVehicle) {
                localStorage.setItem("currentRental", JSON.stringify(incomingVehicle));
                window.dispatchEvent(new Event("rentalUpdated"));
            }

            navigate("/"); 

        } catch (err) {
            alert(err.message || "Login failed");
        }
    };

    return (
        <div className="container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>

                <div className="input-group">
                    <label>Username</label>
                    <input
                        name="username"
                        type="text"
                        required
                        onChange={handleChange}
                    />
                </div>

                <div className="input-group">
                    <label>Password</label>
                    <input
                        name="password"
                        type="password"
                        required
                        onChange={handleChange}
                    />
                </div>

                <button type="submit">Login</button>

                <p className="signup-text">
                    New user?
                    <span className="signup-text-inside" onClick={() => navigate("/signup")}>
                        Sign up
                    </span>
                </p>
            </form>
        </div>
    );
}