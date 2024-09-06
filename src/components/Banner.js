import React from "react";
import "../styles/Banner.css";

const Banner = () => {
    const scrollToElement = () => {
        const element = document.querySelector('.tour-usa');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <React.Fragment>
            {/* <img src="/assets/banner-bg.jpg" alt="banner-bg" className="banner-img" /> */}
            <div className="banner-container">
                <img src="/assets/banner-bg.jpg" alt="banner-bg" className="banner-img" />
                <button className="banner-btn" onClick={scrollToElement}>TOUR TICKET</button>
            </div>
        </React.Fragment>
    );
};

export default Banner;
