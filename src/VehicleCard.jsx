import './css/VehicleCardcss.css';
import { useNavigate } from "react-router-dom";

export default function VehicleCard({ image, brand, name, description, pricePerDay }) {

    const navigate = useNavigate();

    const handleRent = () => {

        const token = localStorage.getItem("token");

        if (!token) {
            alert("Please login to rent a vehicle");
            navigate("/login");
            return;
        }

        const vehicle = { image, brand, name, description, pricePerDay };

        localStorage.setItem("currentRental", JSON.stringify(vehicle));
        window.dispatchEvent(new Event("rentalUpdated"));


        navigate(`/rent/${brand}/${name}`, {
            state: { vehicle }
        });
    };

    return (
        <div className="vehiclecard">
            <img src={image} alt={name} />

            <div className="vehicleinfo">
                <h2>{brand}</h2>
                <h1>{name}</h1>
                <p>{description}</p>
                <h4 className="price">₹{pricePerDay} / day</h4>

                <button className="rentbtn" onClick={handleRent}>
                        Rent Now
                </button>
            </div>
        </div>
    );
}