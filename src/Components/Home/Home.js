import React from "react";
import { Route } from "react-router-dom";

import { Header, PgListing, PgDetail, IndexPage } from "../../Components";
import WrappedComponent from "../../ComponentWrappers";

class Home extends React.Component{

    render(){

        return(
            <div>
                <Header />
                <Route exact path="/" component={ IndexPage } />
                <Route exact path="/north" component={ PgListing } />
                <Route exact path="/south" component={ PgListing } />
                <Route exact path="/north/:key" component={ PgDetail } />
                <Route exact path="/south/:key" component={ PgDetail } />
            </div>
        );

    }

}

export default WrappedComponent(Home);