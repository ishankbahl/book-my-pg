import React from "react";
import Image from "react-bootstrap/lib/Image";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Grid from "react-bootstrap/lib/Grid";
import Glyphicon from "react-bootstrap/lib/Glyphicon";

import "./PgItem.css";

class PgItem extends React.Component{

    render(){

        const { place, sex, nearby, sharing, newPlace, thumbnail, price } = this.props.data;
        const { path, num, onClick } = this.props;

        return(
            <Grid onClick={ () => onClick(`/${path}/${num}`) }>
                <Row className="pg-row">
                    <Col xs={12} md={4} style={{ overflow: "hidden" }} >
                        <Image className="pg-image" src={ thumbnail } thumbnail responsive />
                    </Col>
                    <Col xs={12} md={7} >
                        <div className="pg-content" >
                            <Row>
                                <Col xs={12}>
                                    <b className="place-heading" >{ place }</b>
                                </Col>
                                <Col xs={12}>
                                    <p className="data-para" ><Glyphicon glyph="user" /> For { sex } </p>
                                </Col>
                                <Col xs={12}>
                                    <p className="data-para" ><Glyphicon glyph="map-marker" /> Near { nearby } </p>
                                </Col>
                                <Col xs={12}>
                                    <p className="data-para" > { (newPlace) ? <b>New</b> : "" } { sharing } </p>
                                </Col>
                                {price ?
                                    <Col xs={12}>
                                        <p className="data-para" >Rs. <b>{ price }</b></p>
                                    </Col>
                                : null}
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Grid>
        );

    }

}

export default PgItem;