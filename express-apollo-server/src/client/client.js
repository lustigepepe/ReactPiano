import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import PianoApp from './PianoApp';
import registerServiceWorker from './registerServiceWorker';
// import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { ApolloProvider, Query } from 'react-apollo';
import gql from "graphql-tag";
import ApolloClient from "apollo-boost";
import Layout from "./Layout"; 
import { BrowserRouter as Router } from "react-router-dom";


import './client.css';



const client = new ApolloClient({
  uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
});


client
  .query({
    query: gql `
      {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then(result => console.log(result));
const ExchangeRates = () => (
  <Query
    query={gql`
      {
        rates(currency: "USD") {
          currency
          rate
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.rates.map(({ currency, rate }) => (
        <div key={currency}>
          <p>{`${currency}: ${rate}`}</p>
        </div>
      ));
    }}
  </Query>
);

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app 🚀</h2>
      <ExchangeRates />
    </div>
  </ApolloProvider>
);
const store = createStore( window.REDUX_DATA );

const providedApp = (
  <Provider store={store}>
    <Router>
      <PianoApp/>
    </Router>
  </Provider>
);
ReactDOM.hydrate(providedApp, document.getElementById('root'));

// ReactDOM.hydrate(<PianoApp />, document.getElementById('root'));
// registerServiceWorker();
