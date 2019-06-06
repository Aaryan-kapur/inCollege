import React, { Component } from 'react'
import App from './home/App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path='/' exact component={App} />
                </div>
            </Router>
        )
    }
}
