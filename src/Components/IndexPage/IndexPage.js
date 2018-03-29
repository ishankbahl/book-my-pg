import React from "react";
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Glyphicon from "react-bootstrap/lib/Glyphicon";
import PageHeader from "react-bootstrap/lib/PageHeader";

import { CarouselWrapper } from "../../Components";
import "./IndexPage.css";

class IndexPage extends React.Component{

    render(){

        return(
            <div>
                <Grid>
                    <Row>
                        <Col xs={12} >
                            <CarouselWrapper />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} >
                            <PageHeader className="header-facility" >Facilities</PageHeader>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={4} className="header-facility" >
                            <PageHeader><Glyphicon glyph="cutlery" /></PageHeader>
                            <h4>4 TIMES BUFFET MEALS (VEG AND NON VEG)</h4>
                        </Col>
                        <Col xs={12} md={4} className="header-facility" >
                            <PageHeader><Glyphicon glyph="facetime-video" /></PageHeader>
                            <h4>24 HOUR CCTV SECURITY</h4>
                        </Col>
                        <Col xs={12} md={4} className="header-facility" >
                            <PageHeader><Glyphicon glyph="time" /></PageHeader>
                            <h4>24/7 ONSITE SECURITY</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={4} className="header-facility" >
                            <PageHeader><Glyphicon glyph="education" /></PageHeader>
                            <h4>CLOSEST LOCATIONSTO ALL UNIVERSITIES</h4>
                        </Col>
                        <Col xs={12} md={4} className="header-facility" >
                            <PageHeader><Glyphicon glyph="home" /></PageHeader>
                            <h4>DAILY HOUSKEEPING</h4>
                        </Col>
                        <Col xs={12} md={4} className="header-facility" >
                            <PageHeader><Glyphicon glyph="bed" /></PageHeader>
                            <h4>EGYPTION COTTON BEDDING WITH PILLOW</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={4} className="header-facility" >
                            <PageHeader><Glyphicon glyph="blackboard" /></PageHeader>
                            <h4>EVERY ROOM EQUIPPED WITH LED + TATA SKY</h4>
                        </Col>
                        <Col xs={12} md={4} className="header-facility" >
                            <PageHeader><Glyphicon glyph="apple" /></PageHeader>
                            <h4>FREE COOKIES ON THE GO</h4>
                        </Col>
                        <Col xs={12} md={4} className="header-facility" >
                            <PageHeader><Glyphicon glyph="thumbs-up" /></PageHeader>
                            <h4>FRIENDLY STAFF AVAILABLE 24/7</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={4} className="header-facility" >
                            <PageHeader><Glyphicon glyph="shopping-cart" /></PageHeader>
                            <h4>ONSITE LAUNDRY</h4>
                        </Col>
                        <Col xs={12} md={4} className="header-facility" >
                            <PageHeader><Glyphicon glyph="off" /></PageHeader>
                            <h4>POWER BACKUP</h4>
                        </Col>
                        <Col xs={12} md={4} className="header-facility" >
                            <PageHeader><Glyphicon glyph="signal" /></PageHeader>
                            <h4>UNLIMITED FIBER OPTIC WIFI</h4>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );

    }

}

export default IndexPage;