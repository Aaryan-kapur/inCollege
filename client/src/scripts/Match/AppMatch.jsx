import React, { Component } from 'react';
import Nav from '../home/Nav';
import MainMatch from './MainMatch';
class AppMatch extends Component {

    render() { 
        return ( <React.Fragment>



            <Nav />
            <MainMatch />
        </React.Fragment> );
    }
}
 
export default AppMatch;