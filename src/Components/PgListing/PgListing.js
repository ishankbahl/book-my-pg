import React from "react";

import listingData from "../../helpers/listingData";
import ListGroup from "react-bootstrap/lib/ListGroup";
import { PgItem } from "../../Components/";

class PgListing extends React.Component{

    render(){

        const dataItems = listingData("north");

        return(
            <ListGroup componentClass="ul" >
                {dataItems.map((item) => {
                    <PgItem />
                })}
            </ListGroup>
        );

    }

}

export default PgListing;