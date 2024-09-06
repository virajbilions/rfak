import React from "react";
import "../styles/Sponsor.css";
import { Col, Container, Row } from "reactstrap";

const Sponsor = () => {
    return (
        <React.Fragment>
            <div className="sponsor-wrapper">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <div className="sponsor-txt">Produced by</div>
                            <img src="/assets/produced.svg" alt="produced" className="mx-auto d-block sponsor-img" />
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <div className="sponsor-txt2"></div>
                            <img src="/assets/media.svg" alt="media" className="mx-auto d-block sponsor-img" />
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <div className="sponsor-txt">Official Partner</div>
                            <img src="/assets/official.svg" alt="official" className="mx-auto d-block sponsor-img" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Sponsor;
