import React, { useState, useEffect } from 'react';
import './css/VehicleSlidercss.css';

const slides = [
    { url: "https://images5.alphacoders.com/449/449714.jpg", label: "Sedan" },
    { url: "https://cdn.motor1.com/images/mgl/G3nrKE/s3/land-rover-defender-130-outbound-review.jpg", label: "SUV" },
    { url: "https://hips.hearstapps.com/hmg-prod/images/2025-volkswagen-golf-gti-autobahn-586-688d0ac683047.jpg?crop=0.724xw:0.544xh;0.265xw,0.376xh&resize=1200:*", label: "Hatchback" },
    { url: "https://images.autox.com/uploads/2023/10/BMW-M-1000-R.jpg", label: "Bike" },
    { url: "https://images.nu.nl/m/m1mxd5caf7v5_wd854/0/153/1024/576/lamborghini-huracan.jpg", label: "Supercar" }
];

export default function VehicleSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slider-container">
            <div 
                className="slider-wrapper" 
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div className="slide" key={index}>
                        <img src={slide.url} alt={slide.label} />
                        <div className="slide-label">{slide.label}</div>
                    </div>
                ))}
            </div>
            
            <div className="dots">
                {slides.map((_, index) => (
                    <span 
                        key={index} 
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}