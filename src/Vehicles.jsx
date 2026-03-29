import './css/vehicles.css'
import './css/about.css'
import { useNavigate } from 'react-router-dom'

export default function Vehicles(){

    const navigate = useNavigate();

    return(
        <div>

            <div className="typeofvehicle">
                <h1>Choose your vehicle type</h1>
            </div>

            <div className="vehicles-container">
                <div className="vehicletypecard" onClick={() => navigate("/vehicles/2wheeler")}>
                    <img src="https://leiker.co.uk/wp-content/uploads/2022/01/LEIKER-Aprilia-RSV4-2021-LK-Track-300-Track-days-link-pipe-side-view.jpg" alt="" />
                    <p id='bike1'>2 wheeler</p>
                </div>


                <div className="vehicletypecard" onClick={() => navigate("/vehicles/4wheeler")}>
                    <img src="https://images.overdrive.in/wp-content/odgallery/2019/10/54182_BMW-M5-Competition_003.jpg" alt="" />
                    <p id='car1'>4 wheeler</p>
                </div>
            </div>

            <footer className="aboutfooter">
                <p>© 2026 Vroomy</p>
                <div className="aboutfooter-links">
                    <a href="/">Home</a>
                    <a href="/contact">Contact</a>
                </div>
            </footer>

        </div>
    )
}