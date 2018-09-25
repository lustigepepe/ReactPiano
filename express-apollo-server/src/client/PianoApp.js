import React from 'react';
import ReactDOM from 'react-dom';
import gql from 'graphql-tag';
import { fetchData } from "./store";

import 'ignore-styles'
import logo from './logo.svg';
import './PianoApp.css';
import { Switch, Route } from "react-router-dom";
import routes from "./routes";


class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Welcome to React SSR!",
        };
    }

    render() {
        return (
            <div>
                <h1>{ this.state.title }</h1>
                <Switch>
                    { routes.map( route => <Route key={ route.key } { ...route } /> ) }
                </Switch>
            </div>
        );
    }
}

export default Layout;

