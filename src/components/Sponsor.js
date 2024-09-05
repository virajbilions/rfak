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
                            <img src="/assets/produced.svg" alt="produced" className="mx-auto d-block" />
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <div className="sponsor-txt">Official Partner</div>
                            <img src="" alt="" className="" />
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <div className="sponsor-txt">Media Partner</div>
                            <img src="" alt="" className="" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Sponsor;