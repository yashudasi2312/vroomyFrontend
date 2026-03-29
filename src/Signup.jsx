import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Logincss.css";

export default function Signup({ setUser }) {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        username: "",
        password: "",
        email: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:8080/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            });

            if (!res.ok) {
                const err = await res.json();
                throw new Error(err.error);
            }

            const data = await res.json();


            localStorage.setItem("token", data.jwtToken);
            localStorage.setItem("username", data.username);


            setUser({
                username: data.username
            });

            navigate("/");                             

        } catch (err) {
            alert(err.message || "Signup failed");
        }
    };

    return (
        <div className="container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Create a new account</h2>

                <div className="input-group">
                    <label>Name</label>
                    <input name="name" type="text" placeholder="Enter name" required onChange={handleChange} />
                </div>

                <div className="input-group">
                    <label>Username</label>
                    <input name="username" type="text" placeholder="Enter username" required onChange={handleChange} />
                </div>

                <div className="input-group">
                    <label>Password</label>
                    <input name="password" type="password" placeholder="Enter password" required onChange={handleChange} />
                </div>

                <div className="input-group">
                    <label>Email</label>
                    <input name="email" type="email" placeholder="Enter email" required onChange={handleChange} />
                </div>

                <button type="submit">Sign up</button>
            </form>
        </div>
    );
}