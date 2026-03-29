import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./css/Rentpagecss.css";
import axios from "axios";

export default function RentDetails() {
    const location = useLocation();
    const navigate = useNavigate();
    const incoming = location.state?.vehicle;

    const [vehicle, setVehicle] = useState(null);
    const [loading, setLoading] = useState(false);

    const token = localStorage.getItem("token");

   const handleCheckout = async () => {

    if (!token) {
        alert("Please login to rent a vehicle");
        navigate("/login", {
            state: { vehicle }
        });
        return;
    }

    setLoading(true);

    try {
        const start = Date.now();

        await axios.post("http://localhost:8080/rent", {
            brand: vehicle.brand,
            name: vehicle.name,
            price: vehicle.pricePerDay
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });


        const elapsed = Date.now() - start;
        const delay = Math.max(1500 - elapsed, 0);
        await new Promise(res => setTimeout(res, delay));

        localStorage.removeItem("currentRental");
        window.dispatchEvent(new Event("rentalUpdated"));
        navigate("/rentals");

    } catch (err) {
        console.error(err);
    } finally {
        setLoading(false);
    }
};

    useEffect(() => {

        const sync = () => {
            const data = localStorage.getItem("currentRental");

            if (data) {
                setVehicle(JSON.parse(data));
            } else if (incoming) {
                setVehicle(incoming);
            } else {
                setVehicle(null);
                navigate("/vehicles");
            }
        };
        console.log("Incoming vehicle:", location.state);

        sync();

        window.addEventListener("rentalUpdated", sync);

        return () => {
            window.removeEventListener("rentalUpdated", sync);
        };

    }, []);

    if (!vehicle) return null;

    return (

        <div className="rent-container">

            {loading && (
                <div className="loading-overlay">
                    <div className="loader"></div>
                    <p>Processing your rental...</p>
                </div>
            )}

            <div className="rent-left">
                <h1>{vehicle.brand} {vehicle.name}</h1>
                <p>{vehicle.description}</p>
                <h3>₹{vehicle.pricePerDay} / day</h3>

                <button className="checkout-btn" onClick={handleCheckout} disabled={loading}>
                    Checkout
                </button>

                <button
                    className="cancel-btn"
                    onClick={() => {
                        localStorage.removeItem("currentRental");
                        window.dispatchEvent(new Event("rentalUpdated"));
                        setVehicle(null);
                        navigate("/vehicles");
                    }}
                >
                    Cancel Rental
                </button>
            </div>

            <div className="rent-right">
                <img src={vehicle.image} alt={vehicle.name} />
            </div>

        </div>
    );
}