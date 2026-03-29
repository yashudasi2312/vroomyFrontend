import { useState } from "react";
import VehicleCard from "./VehicleCard";
import "./css/Bikecss.css";

export default function Cars() {

    const [brand, setBrand] = useState("All");

    const cars = [
        {
            image: "https://www.westcoastexoticcars.com/imagetag/433/2/l/Used-2012-Lamborghini-Aventador-LP-700-4-1620507414.jpg",
            name: "Aventador",
            brand: "Lamborghini",
            description: "V12 supercar with brutal power and aggressive styling.",
            pricePerDay: 1500
        },
        {
            image: "https://www.theoctanecollection.com/wp-content/uploads/-2025-07-02/IMG_5172-Edit-1024x617.jpg",
            name: "SF90 Stradale",
            brand: "Ferrari",
            description: "Hybrid hypercar with insane speed and Italian design.",
            pricePerDay: 1400
        },
        {
            image: "https://www.westcoastexoticcars.com/imagetag/1448/2/l/Used-2022-Porsche-911-GT3-1666916222.jpg",
            name: "911 GT3",
            brand: "Porsche",
            description: "Track-focused sports car with legendary handling.",
            pricePerDay: 900
        },
        {
            image: "https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/M5-2025/11821/1719462197562/side-view-(right)-38.jpg",
            name: "M5 CS",
            brand: "BMW",
            description: "Luxury sedan with supercar-level performance.",
            pricePerDay: 600
        },
        {
            image: "https://images.caricos.com/a/audi/2017_audi_r8_v10_plus_exclusive/images/1600x1200/2017_audi_r8_v10_plus_exclusive_4_1600x1200.jpg",
            name: "R8 V10",
            brand: "Audi",
            description: "Everyday supercar with V10 performance.",
            pricePerDay: 800
        },
        {
            image: "https://www.topgear.com/sites/default/files/2024/05/5-AMG-GT-UK-review-2024.jpg",
            name: "AMG GT",
            brand: "Mercedes",
            description: "Luxury coupe with thunderous AMG power.",
            pricePerDay: 750
        },
        {
            image: "https://www.westcoastexoticcars.com/imagetag/1862/2/l/Used-2020-Nissan-GT-R-Track-Edition-1696876094.jpg",
            name: "GT-R",
            brand: "Nissan",
            description: "The Godzilla with insane acceleration and grip.",
            pricePerDay: 700
        },
        {
            image: "https://www.rwcarbon.com/media/uploads_ckeditor/rw-carbon-tesla-model-s-plaid-carbon-fiber-side-skirt-extensions-WATERMARKED-(6).jpg",
            name: "Model S Plaid",
            brand: "Tesla",
            description: "Electric rocket with unmatched straight-line speed.",
            pricePerDay: 500
        },
        {
            image: "https://cdn.mos.cms.futurecdn.net/ADpPHNk5moyuJ6arwVxNnP.jpg",
            name: "Phantom",
            brand: "Rolls Royce",
            description: "Ultimate luxury and comfort on wheels.",
            pricePerDay: 1200
        },
        {
            image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202306/spice-range-rover-sixteen_nine.jpg?VersionId=IE2gU79cg3IKDadn33SDGkbwn5dCs.PO&size=690:388",
            name: "Range Rover",
            brand: "Land Rover",
            description: "Luxury SUV built for comfort and off-road ability.",
            pricePerDay: 650
        }
    ];

    const filteredCars =
        brand === "All" ? cars : cars.filter(c => c.brand === brand);

    return (
        <div>
            <div className="sortingbikes">
                <select value={brand} onChange={(e) => setBrand(e.target.value)}>
                    <option>All</option>
                    <option>Lamborghini</option>
                    <option>Ferrari</option>
                    <option>Porsche</option>
                    <option>BMW</option>
                    <option>Audi</option>
                    <option>Mercedes</option>
                    <option>Nissan</option>
                    <option>Tesla</option>
                    <option>Rolls Royce</option>
                    <option>Land Rover</option>
                </select>
            </div>


            <div className="bikecards">
                {filteredCars.map((car, i) => (
                    <VehicleCard
                        key={i}
                        image={car.image}
                        name={car.name}
                        brand={car.brand}
                        description={car.description}
                        pricePerDay={car.pricePerDay}
                    />
                ))}
            </div>

            <footer className="aboutfooter">
                <p>© 2026 Vroomy</p>
                <div className="aboutfooter-links">
                    <a href="/">Home</a>
                    <a href="/contact">Contact</a>
                </div>
            </footer>
        </div>
    );
}