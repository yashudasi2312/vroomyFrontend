import { useState } from "react";
import VehicleCard from "./VehicleCard";
import "./css/Bikecss.css";

export default function Bikes() {

    const [brand, setBrand] = useState("All");

    const bikes = [
        {
            image: "https://leiker.co.uk/wp-content/uploads/2022/01/LEIKER-Aprilia-RSV4-2021-LK-Track-300-Track-days-link-pipe-side-view.jpg",
            name: "RSV4",
            brand: "Aprilia",
            description: "A refined superbike with sporty performance and stunning design.",
            pricePerDay: 350
        },
        {
            image: "https://i.pinimg.com/736x/a9/63/ee/a963eea8ca8109bccf4737f23ced7148.jpg",
            name: "Ninja H2R",
            brand: "Kawasaki",
            description: "Track-only monster with jet-engine power and insane acceleration.",
            pricePerDay: 350
        },
        {
            image: "https://steadymoto.com/cdn/shop/collections/BMW_R_1300_GS_Adv_2025.png?v=1736915179",
            name: "GS1250",
            brand: "BMW",
            description: "Comfortable, versatile, and ready for long rides and everyday adventures.",
            pricePerDay: 250
        },
        {
            image: "https://ridermagazine.com/wp-content/uploads/2018/11/Ducati-Panigale-V4-R-featured.jpg",
            name: "Panigale V4",
            brand: "Ducati",
            description: "A stunning Italian superbike with smooth power and premium design.",
            pricePerDay: 320
        },
        {
            image: "https://www.cycleworld.com/resizer/ENoK0QJSg8NWys5R8K-Z1eYSMRE=/arc-photo-octane/arc3-prod/public/PJN4B2BYMVEBPA3RMUNHV2E6BI.jpg",
            name: "CBR1000RR-R",
            brand: "Honda",
            description: "Track-inspired performance with everyday ride comfort.",
            pricePerDay: 250
        },
        {
            image: "https://www.motosausio.com/wp-content/uploads/2017/06/2024-Yamaha-YZF1000R1SPL-EU-Icon_Performance-Studio-002-03.jpg",
            name: "YZF R1",
            brand: "Yamaha",
            description: "Sharp handling and race-ready performance in a sleek package.",
            pricePerDay: 250
        },
        {
            image: "https://imgd.aeplcdn.com/1280x720/n/7d7jqhb_1882275.jpg",
            name: "Speed Triple RS",
            brand: "Triumph",
            description: "Lightweight, agile, and fun for city and highway rides.",
            pricePerDay: 200
        },
        {
            image: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/211527/z900-right-side-view-9.jpeg?isig=0&q=100",
            name: "Z900",
            brand: "Kawasaki",
            description: "Smooth, muscular, and perfect for everyday riding.",
            pricePerDay: 120
        },
        {
            image: "https://4kwallpapers.com/images/walls/thumbs_3t/4389.jpg",
            name: "Hayabusa",
            brand: "Suzuki",
            description: "Legendary speed with refined comfort and stability.",
            pricePerDay: 200
        },
        {
            image: "https://imgd.aeplcdn.com/1280x720/n/rmk6seb_1777183.jpg?q=100",
            name: "Interceptor 650",
            brand: "Royal Enfield",
            description: "Classic style with modern performance for relaxed touring.",
            pricePerDay: 60
        },
        {
            image: "https://www.motoproworks.com/cdn/shop/files/Cleave-White-390-Duke_2024_e6b2c1d3-0b0e-427f-be65-ac2c726a6a69.png?v=1743360186",
            name: "Duke 390",
            brand: "KTM",
            description: "Lightweight streetfighter with thrilling performance.",
            pricePerDay: 40
        },
        {
            image: "https://cdpcdn.dx1app.com/products/USA/HO/2024/MC/DUALPURP/AFRICA_TWIN_DCT/50/GRAND_PRIX_RED/2000000015.jpg",
            name: "Africa Twin",
            brand: "Honda",
            description: "Adventure bike built for long journeys and rough terrain.",
            pricePerDay: 200
        },
        {
            image: "https://leiker.co.uk/wp-content/uploads/2022/06/BMW-S1000RR-19-22-DECAT-LK-180-Ti-Pie-Side-view-1.jpg",
            name: "S1000RR",
            brand: "BMW",
            description: "High-tech superbike with explosive performance.",
            pricePerDay: 300
        },
        {
            image: "https://media.zigcdn.com/media/content/2021/Jan/2021_ducati_scrambler_icon_red.jpg?tr=w-1200",
            name: "Scrambler 800",
            brand: "Ducati",
            description: "Stylish urban scrambler with easy handling.",
            pricePerDay: 100
        }
    ];

    const filteredBikes =
        brand === "All" ? bikes : bikes.filter(b => b.brand === brand);

    return (
        <div>
            <div className="sortingbikes">
                <select
                value={brand}
                onChange={(e) => setBrand(e.target.value)}>
                    <option>All</option>
                    <option>Aprilia</option>
                    <option>Kawasaki</option>
                    <option>BMW</option>
                    <option>Ducati</option>
                    <option>Honda</option>
                    <option>Yamaha</option>
                    <option>Triumph</option>
                    <option>KTM</option>
                    <option>Royal Enfield</option>
                    <option>Suzuki</option>
                </select>
            </div>


            <div className="bikecards">
                {filteredBikes.map((bike, i) => (
                    <VehicleCard
                        key={i}
                        image={bike.image}
                        name={bike.name}
                        brand={bike.brand}
                        description={bike.description}
                        pricePerDay={bike.pricePerDay}
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
