import React from "react";
import Jumbotron from "react-bootstrap/lib/Jumbotron";
import PageHeader from "react-bootstrap/lib/PageHeader";

import "./PgJumbotron.css";

class PgJumbotron extends React.Component{

    render(){

        const { url, text1, text2 } = this.props;

        return(
            <Jumbotron style={{
                backgroundImage:`url('${url}')`
            }} className="pg-jumbo">
                <PageHeader className="jumbo-header" >{ text1 }</PageHeader>
                <PageHeader className="jumbo-header" >{ text2 }</PageHeader>
            </Jumbotron>
        );

    }

}

export default PgJumbotron;