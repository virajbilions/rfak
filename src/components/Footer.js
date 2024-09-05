import React from "react";
import "../styles/Footer.css";

const Footer = () => {
    return (
        <React.Fragment>
            <div className="footer-wrapper">
                <div className="footer-contact">CONTACT</div>
                <div className="footer-number">+1 987 654 3210</div>
                <div className="footer-img-wrapper">
                    <img
                        src="/assets/instagram-icon.svg"
                        alt="instagram-icon"
                        className="footer-img-icon"
                        onClick={() =>
                            window.open("https://www.instagram.com/officialrfakworld?igsh=MzRlODBiNWFlZA==", "_blank")
                        }
                    />
                    <img
                        src="/assets/facebook-icon.svg"
                        alt="facebook-icon"
                        className="footer-img-icon"
                        onClick={() =>
                            window.open("https://www.facebook.com/RFAKWorld?mibextid=LQQJ4d", "_blank")
                        }
                    />
                    {/* <img
                        src="/assets/linkedin-icon.svg"
                        alt="linkedin-icon"
                        className="footer-img-icon"
                        onClick={() =>
                            window.open("https://www.facebook.com/RFAKWorld?mibextid=LQQJ4d", "_blank")
                        }
                    /> */}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Footer;
