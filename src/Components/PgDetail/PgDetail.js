import React from "react";

import listingData from "../../helpers/listingData";
import { CarouselWrapper } from "../../Components";

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

        const details = listingData(path)[num];

        return(
            <div><CarouselWrapper /></div>
        );

    }

}

export default PgDetail;