import React, { useState } from "react";
import {
    Container,
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Row,
    Col,
} from "reactstrap";
import classnames from "classnames";
import { canadaTourData, usaTourData } from "../data/TourData";
import "../styles/TourDetail.css";

const TourDetail = () => {
    const [activeTab, setActiveTab] = useState("1");

    const toggle = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    return (
        <React.Fragment>
            <div className="touer-wrapper">
                <div className="tour-world">World Tour</div>
                <div className="tour-come">COME SEE US LIVE, IT'LL BE A GOOD TIME</div>
                <Container>
                    <Nav tabs pills className="justify-content-center mt-5 mb-5">
                        <span className="tour-nav-wrapper">
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === "1" })}
                                    onClick={() => toggle("1")}
                                >
                                    America
                                </NavLink>
                            </NavItem>
                            {/* <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === "2" })}
                                    onClick={() => toggle("2")}
                                >
                                    Middle East
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === "3" })}
                                    onClick={() => toggle("3")}
                                >
                                    Asia
                                </NavLink>
                            </NavItem> */}
                        </span>
                    </Nav>

                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <div className="tour-usa">CANADA TOUR 2024</div>
                            <div className="tour-come-see">
                                COME SEE US LIVE, IT'LL BE A GOOD TIME
                            </div>
                            <Row className="mt-5">
                                {canadaTourData.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <Col
                                            xs={12}
                                            sm={12}
                                            md={3}
                                            lg={3}
                                            className="mb-2"
                                            key={index + 1}
                                        >
                                            <div className="tour-item-bg">
                                                <span className="tour-item-txt">{item?.date}</span>
                                            </div>
                                        </Col>
                                        <Col xs={12} sm={12} md={3} lg={3} className="mb-2">
                                            <div className="tour-item-bg">
                                                <span className="tour-item-txt">{item?.city}</span>
                                            </div>
                                        </Col>
                                        <Col xs={12} sm={12} md={4} lg={4} className="mb-2">
                                            <div className="tour-item-bg">
                                                <span className="tour-item-txt">{item?.place}</span>
                                            </div>
                                        </Col>
                                        <Col xs={12} sm={2} md={2} lg={2} className="mb-2">
                                            <button
                                                className={item?.soldOut === true ? "tour-item-btn-sold" : "tour-item-btn"}
                                                onClick={() => {
                                                    if (!item?.soldOut) {
                                                        window.open(item?.url, "_blank");
                                                    }
                                                }
                                                }
                                            >
                                                {item?.soldOut === true ? "SOLD OUT" : "BUY TICKETS"}
                                            </button>
                                        </Col>
                                        <hr className="custom-hr" />
                                    </React.Fragment>
                                ))}
                            </Row>

                            <br />

                            <div className="tour-usa">USA TOUR 2024</div>
                            <div className="tour-come-see">
                                COME SEE US LIVE, IT'LL BE A GOOD TIME
                            </div>
                            <Row className="mt-5">
                                {usaTourData.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <Col
                                            xs={12}
                                            sm={12}
                                            md={3}
                                            lg={3}
                                            className="mb-2"
                                            key={index + 1}
                                        >
                                            <div className="tour-item-bg">
                                                <span className="tour-item-txt">{item?.date}</span>
                                            </div>
                                        </Col>
                                        <Col xs={12} sm={12} md={3} lg={3} className="mb-2">
                                            <div className="tour-item-bg">
                                                <span className="tour-item-txt">{item?.city}</span>
                                            </div>
                                        </Col>
                                        <Col xs={12} sm={12} md={4} lg={4} className="mb-2">
                                            <div className="tour-item-bg">
                                                <span className="tour-item-txt">{item?.place}</span>
                                            </div>
                                        </Col>
                                        <Col xs={12} sm={2} md={2} lg={2} className="mb-2">
                                            <button
                                                className={item?.soldOut === true ? "tour-item-btn-sold" : "tour-item-btn"}
                                                onClick={() => {
                                                    if (!item?.soldOut) {
                                                        window.open(item?.url, "_blank");
                                                    }
                                                }
                                                }
                                            >
                                                {item?.soldOut === true ? "SOLD OUT" : "BUY TICKETS"}
                                            </button>
                                        </Col>
                                        <hr className="custom-hr" />
                                    </React.Fragment>
                                ))}
                            </Row>
                        </TabPane>
                        {/* <TabPane tabId="2">
                        <Row>
                            <Col sm="12">
                                <h4>Tab 2 Contents</h4>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="3">
                        <Row>
                            <Col sm="12">
                                <h4>Tab 3 Contents</h4>
                            </Col>
                        </Row>
                    </TabPane> */}
                    </TabContent>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default TourDetail;
