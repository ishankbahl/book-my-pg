import React from "react";
import { Route } from "react-router-dom";

import { Header, PgListing } from "../../Components";
import WrappedComponent from "../../ComponentWrappers";

class Home extends React.Component{

    render(){

        return(
            <div>
                <Header />
                <Route exact path="/north" component={ PgListing } />
                <Route exact path="/south" component={ PgListing } />
            </div>
        );

    }

}

export default WrappedComponent(Home);