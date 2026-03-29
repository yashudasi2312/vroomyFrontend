import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./css/ActiveRentalcss.css";

export default function ActiveRental() {

    const [vehicle, setVehicle] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    const isOnRentPage = location.pathname.startsWith("/rent/");

    useEffect(() => {

        const checkRental = () => {
            const token = localStorage.getItem("token");
            const data = localStorage.getItem("currentRental");

            if (!token || !data) {
                setVehicle(null);
                return;
            }

            setVehicle(JSON.parse(data));
        };

        checkRental();

        window.addEventListener("rentalUpdated", checkRental);
        window.addEventListener("authChanged", checkRental);

        return () => {
            window.removeEventListener("rentalUpdated", checkRental);
            window.removeEventListener("authChanged", checkRental);
        };

    }, [location.pathname]);

    const token = localStorage.getItem("token");

    if (!token || !vehicle || isOnRentPage) return null;

    return (
        <div className="active-rental">

            <div className="active-title">
                {vehicle.brand} {vehicle.name}
            </div>

            <div className="active-actions">

                <button
                    className="cancel"
                    onClick={() => {
                        localStorage.removeItem("currentRental");
                        window.dispatchEvent(new Event("rentalUpdated"));
                        setVehicle(null);
                    }}
                >
                    Cancel
                </button>

                <button
                    className="checkout"
                    onClick={() =>
                        navigate(`/rent/${vehicle.brand}/${vehicle.name}`)
                    }
                >
                    Checkout
                </button>

            </div>

        </div>
    );
}