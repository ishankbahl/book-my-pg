import React from "react";
import { withRouter } from "react-router-dom";
import ListGroup from "react-bootstrap/lib/ListGroup";
import Jumbotron from "react-bootstrap/lib/Jumbotron";
import PageHeader from "react-bootstrap/lib/PageHeader";

import listingData from "../../helpers/listingData";
import { PgItem } from "../../Components/";
import "./PgListing.css";

class PgListing extends React.Component{

    constructor(props){

        super(props);

        this.state = {
            path: (this.props.match.path).slice(1),
        }

        this.changeRoute = this.changeRoute.bind(this);

    }

    changeRoute(location){
        console.log(600000000);
        this.props.history.push(location);

    }

    render(){

        const { path } = this.state;

        const dataItems = listingData(path);

        return(
            <div>
                {(path === "north") ? 
                <Jumbotron style={{
                    backgroundImage:"url('http://www.universityexpress.co.in/delhiuniversity/wp-content/uploads/2014/05/srcc6.jpg')"
                }} className="pg-jumbo">
                    <PageHeader className="jumbo-header" >NORTH CAMPUS</PageHeader>
                    <PageHeader className="jumbo-header" >LIVE IT. LOVE IT. BELONG</PageHeader>
                </Jumbotron> :
                <Jumbotron style={{
                    backgroundImage:"url('http://www.harris-architecture.com/wp-content/uploads/2014/02/WFP_20121017_6911-1024x707.jpg')"
                }} className="pg-jumbo">
                    <PageHeader className="jumbo-header" >SOUTH CAMPUS</PageHeader>
                    <PageHeader className="jumbo-header" >LIVE IT. LOVE IT. BELONG</PageHeader>
                </Jumbotron>
            }
                <ListGroup componentClass="ul" className="pg-container" >
                    {dataItems.map((item, key) =>
                        <PgItem key={ key } data={ item } num={ key } path={ path } onClick={ this.changeRoute } />
                    )}
                </ListGroup>
            </div>
        );

    }

}

export default withRouter(PgListing);