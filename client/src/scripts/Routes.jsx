import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import App from './home/App';
import Error from './Error';

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path='/' exact component={App} />
                        <Route component={()=><Error msg='404'/>}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}
