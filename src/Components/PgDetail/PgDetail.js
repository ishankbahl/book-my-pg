import React from "react";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Grid from "react-bootstrap/lib/Grid";
import Glyphicon from "react-bootstrap/lib/Glyphicon";

import listingData from "../../helpers/listingData";
import { CarouselWrapper } from "../../Components";
import "./PgDetail.css";

class PgDetail extends React.Component{

    constructor(props){

        super(props);

        this.state = {

            path: this.props.location.pathname.slice(1, -2),
            num: this.props.location.pathname.slice(-1),

        };

    }

    render(){

        const { path, num } = this.state;

        const { place, facilities, newPlace, sharing, sex, contact, price, nearby } = listingData(path)[num];

        return(
            <div className="pg-detail" >
                <Grid className="pg-detail-container" >
                    <Row className="pg-detail-row" >
                        <Col xs={12} >
                            <CarouselWrapper />
                        </Col>
                    </Row>
                    <Row className="pg-detail-row" >
                        <Col xs={12} >
                            <h2>Location</h2>
                        </Col>
                        <Col xs={12} >
                            <h4 className="data-para" > <Glyphicon glyph="map-marker" /> { place }</h4>
                        </Col>
                    </Row>
                    <Row className="pg-detail-row">
                        <Col xs={12} >
                            <h2>Facilities</h2>
                        </Col>
                        <Col xs={12} >
                            {facilities.map((facility, key) =>
                                (<div key={ key } >
                                    <Glyphicon glyph="asterisk" />
                                    <h4 className="data-para"> { facility }</h4>
                                </div>)
                            )}
                        </Col>
                    </Row>
                    <Row className="pg-detail-row" >
                        <Col xs={12} >
                            <h2>Sharing</h2>
                        </Col>
                        <Col xs={12} >
                            <h4> { (newPlace) ? <b>New</b> : "" } { sharing } </h4>
                        </Col>
                    </Row>
                    <Row className="pg-detail-row" >
                        <Col xs={4} >
                            <h4 className="detail-center" ><Glyphicon  glyph="earphone" /> { contact.name }</h4>
                            <h4 className="detail-center" >{ contact.number }</h4>
                        </Col>
                        <Col xs={4} >
                            <h4 className="detail-center" ><Glyphicon glyph="user" /> { sex }</h4>
                        </Col>
                        <Col xs={4} >
                            <h4 className="detail-center" > <b>Rs.</b> { price ? price : "N/A" }</h4>
                        </Col>
                    </Row>
                </Grid>
                <Grid className="pg-detail-container" >
                    <Row className="pg-detail-row" >
                        <Col xs={12} >
                            <h4 className="detail-center" ><Glyphicon glyph="map-marker" /> { nearby }</h4>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );

    }

}

export default PgDetail;