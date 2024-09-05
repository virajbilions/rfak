import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../styles/About.css";

const About = () => {
    return (
        <React.Fragment>
            <div className="about-wrapper">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={5}>
                            <img src="/assets/about-img.svg" alt="about-img" className="about-img" />
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={7}>
                            <div className="about-txt-wrapper">
                                <div className="about-rfak">
                                    About the “RFAK”
                                </div>
                                <div className="about-rahat">
                                    Rahat Fateh Ali Khan, born on December 9, 1974, in Faisalabad, Pakistan, is a globally renowned Qawwali and playback singer. He hails from a prestigious musical lineage, being the nephew of the legendary Ustad Nusrat Fateh Ali Khan, and has carved his own illustrious path in the world of music.
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
};

export default About;
