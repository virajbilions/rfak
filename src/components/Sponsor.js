import React from "react";
import "../styles/Sponsor.css";
import { Col, Container, Row } from "reactstrap";

const Sponsor = () => {
    return (
        <React.Fragment>
             <div className="sponsor-wrapper">
                <Container>
                    {/* <Row>
                        <Col xs={12} sm={12} md={3} lg={3}>
                            <div className="sponsor-txt">Produced by</div>
                            <img src="/assets/produced.svg" alt="produced" className="mx-auto d-block sponsor-img" />
                        </Col>
                        <Col xs={12} sm={12} md={3} lg={3}>
                            <div className="sponsor-txt">Media Partner</div>
                            <img src="/assets/media.svg" alt="media" className="mx-auto d-block sponsor-img" />
                        </Col>
                        <Col xs={12} sm={12} md={3} lg={3}>
                            <div className="sponsor-txt">Official Partner</div>
                            <img src="/assets/official.svg" alt="official" className="mx-auto d-block sponsor-img" />
                        </Col>
                        <Col xs={12} sm={12} md={3} lg={3}>
                            <div className="sponsor-txt">Media Partner</div>
                            <img src="/assets/fm.png" alt="media" className=" sponsor-img" />
                        </Col>
                    </Row> */}

                    <Row>
                        <Col xs={12} sm={12} md={3} lg={3}>
                            <div className="image-container">
                                <img src="/assets/produced.svg" alt="produced" />
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={3} lg={3}>
                            <div className="image-container">
                                <img src="/assets/media.svg" alt="produced" />
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={3} lg={3}>
                            <div className="image-container">
                                <img src="/assets/official.svg" alt="produced" />
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={3} lg={3}>
                            <div className="image-container">
                                <img src="/assets/fm.svg" alt="produced" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Sponsor;
