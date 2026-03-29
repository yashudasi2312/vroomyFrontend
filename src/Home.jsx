import "./css/Homecss.css";
import './css/About.css';
import VehicleSlider from "./VehicleSlider";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Home() {

    const navigate = useNavigate();

    return (
        <>
            <div className="toptext">
                <img
                    src="https://hips.hearstapps.com/mtg-prod/65bdabd1fcb4bb000826b07d/2016-audi-a8-l-40t-sport-profile.jpg"
                    alt=""
                    className="hero-img"
                />

                <div className="toptexttitle">
                    <h1>Welcome to Vroomy</h1>
                    <p>
                        Your one stop solution for all your vehicle rental needs! Discover from a wide range of vehicles, from compact cars to spacious SUVs, all available at competitive rates.
                        Whether you're planning a weekend getaway or need a reliable ride for business, we've got you covered.
                    </p>
                </div>
            </div>


            <div className="check">
                <p>
                    Explore what's in store for you.
                </p>
            </div>


            <VehicleSlider />

            <div className="exploremore" onClick={() => navigate("/vehicles")}>
                <h2>See more</h2>
            </div>

            <footer className="aboutfooter">
                <p>© 2026 Vroomy</p>
                <div className="aboutfooter-links">
                    <a href="/">Home</a>
                    <a href="/contact">Contact</a>
                </div>
            </footer>
        </>
    )
}